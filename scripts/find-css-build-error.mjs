import fg from "fast-glob";
import fs from "node:fs";
import postcss from "postcss";
import loadConfig from "postcss-load-config";
import { transform } from "lightningcss";

const files = await fg(["**/*.css", "!**/.next/**", "!**/profile/**"], {
  dot: true,
});

const { plugins, options } = await loadConfig({}, process.cwd());

for (const file of files) {
  const input = fs.readFileSync(file, "utf8");

  try {
    // 1) Run your PostCSS pipeline (nesting, custom-media, pxtorem, global-data etc.)
    const result = await postcss(plugins).process(input, {
      ...options,
      from: file,
      map: false,
    });

    // 2) Now run Lightning CSS parser/minifier stage (what Next often uses later)
    // We don't need to minify; parsing alone is enough to trigger the error.
    transform({
      filename: file,
      code: Buffer.from(result.css),
      minify: false,
    });
  } catch (e) {
    console.error("\n❌ CSS pipeline error (PostCSS -> LightningCSS)");
    console.error("📄 File:", file);

    // PostCSS errors
    if (e?.name === "CssSyntaxError") {
      console.error("📍 Line:", e.line, "Column:", e.column);
      console.error("🧾 Reason:", e.reason || e.message);
      const lines = input.split(/\r?\n/);
      const li = Math.max(0, (e.line || 1) - 1);
      console.error("\n" + lines[li]);
      if (e.column) console.error(" ".repeat(Math.max(0, e.column - 1)) + "^");
      process.exit(1);
    }

    // LightningCSS errors (often have loc)
    if (e?.loc) {
      console.error("📍 Line:", e.loc.line, "Column:", e.loc.column);
    }
    console.error("🧾", e?.message || String(e));
    process.exit(1);
  }
}

console.log("✅ No errors found by PostCSS + LightningCSS");

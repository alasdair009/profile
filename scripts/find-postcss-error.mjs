import fg from "fast-glob";
import fs from "node:fs";
import postcss from "postcss";
import loadConfig from "postcss-load-config";

const files = await fg(
  ["**/*.css", "!**/node_modules/**", "!**/.next/**", "!**/profile/**"],
  { dot: true }
);

// Load your postcss config (postcss.config.js / .mjs / package.json)
const { plugins, options } = await loadConfig({}, process.cwd());

// Run PostCSS over each file using the same plugins as Next will
for (const file of files) {
  const css = fs.readFileSync(file, "utf8");
  try {
    await postcss(plugins).process(css, {
      ...options,
      from: file,
      map: false,
    });
  } catch (e) {
    console.error("\n❌ PostCSS transform error");
    console.error("📄 File:", e.file || file);
    console.error("📍 Line:", e.line, "Column:", e.column);
    console.error("🧾 Reason:", e.reason || e.message);

    const lines = css.split(/\r?\n/);
    const li = Math.max(0, (e.line || 1) - 1);
    console.error("\n" + lines[li]);
    if (e.column) console.error(" ".repeat(Math.max(0, e.column - 1)) + "^");

    process.exit(1);
  }
}

console.log("✅ No PostCSS errors found");

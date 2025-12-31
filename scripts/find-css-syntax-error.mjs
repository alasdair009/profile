import fg from "fast-glob";
import fs from "node:fs";
import postcss from "postcss";
import scssSyntax from "postcss-scss";

const files = await fg(
  ["**/*.css", "!**/node_modules/**", "!**/.next/**", "!**/profile/**"],
  { dot: true }
);

for (const file of files) {
  const css = fs.readFileSync(file, "utf8");

  try {
    postcss().process(css, { from: file, syntax: scssSyntax }).sync();
  } catch (e) {
    console.error("\n❌ CSS syntax error");
    console.error("📄 File:", e.file || file);
    console.error("📍 Line:", e.line, "Column:", e.column);
    console.error("🧾 Reason:", e.reason || e.message);

    const lines = css.split(/\r?\n/);
    const lineIndex = Math.max(0, (e.line || 1) - 1);

    console.error("\n" + lines[lineIndex]);
    if (e.column) {
      console.error(" ".repeat(Math.max(0, e.column - 1)) + "^");
    }

    process.exit(1);
  }
}

console.log("✅ No CSS syntax errors found");

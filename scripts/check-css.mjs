import fs from "node:fs";
import path from "node:path";
import process from "node:process";

function walk(dir, exts, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, exts, out);
    else if (exts.some((e) => entry.name.endsWith(e))) out.push(p);
  }
  return out;
}

async function optionalImport(pkg) {
  try {
    const mod = await import(pkg);
    return mod?.default ?? mod;
  } catch {
    return null;
  }
}

const roots = ["app", "src", "entities", "components"].filter((d) =>
  fs.existsSync(d)
);

const files = roots.flatMap((r) => walk(r, [".css", ".scss"]));

const lightningcssMod = await import("lightningcss");
const transform =
  lightningcssMod.transform ?? lightningcssMod.default?.transform;

if (!transform) {
  console.error(
    "Could not load lightningcss.transform. Is lightningcss installed?"
  );
  process.exit(1);
}

const sass = await optionalImport("sass"); // optional

let failed = 0;

for (const file of files) {
  try {
    let css;

    if (file.endsWith(".scss")) {
      if (!sass?.compile) {
        console.error(`sass not installed, can't compile: ${file}`);
        console.error("Run: npm i -D sass");
        failed++;
        continue;
      }
      const result = sass.compile(file, {
        loadPaths: [process.cwd()],
        style: "expanded",
        sourceMap: false,
      });
      css = result.css;
    } else {
      css = fs.readFileSync(file, "utf8");
    }

    transform({
      filename: file,
      code: Buffer.from(css),
      minify: false,
      sourceMap: false,
    });
  } catch (err) {
    failed++;
    console.error("\n❌ LightningCSS error");
    console.error("📄 File:", file);

    const loc =
      err?.loc ||
      err?.location ||
      err?.data?.loc ||
      err?.data?.location ||
      null;

    if (loc) console.error("📍 Location:", loc);
    console.error("🧾", err?.message ?? String(err));
  }
}

if (failed) {
  console.error(`\nDone. ${failed} file(s) failed parsing.`);
  process.exit(1);
} else {
  console.log("✅ All CSS/SCSS parsed cleanly by LightningCSS.");
}

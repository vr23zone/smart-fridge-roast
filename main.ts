import * as fs from "node:fs";
import * as path from "node:path";

// Roast the Smart Fridge: one line, best laugh wins.
const ENTRY =
  "My fridge shows me ads for food I already own, then shames me for eating it — it's not an appliance, it's a landlord with a touchscreen and a grudge.";

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);

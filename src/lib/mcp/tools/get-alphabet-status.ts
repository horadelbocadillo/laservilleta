import { defineTool } from "@lovable.dev/mcp-js";

const LETTERS = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");
const FOUND = ["M", "R"];
const DEDUCED = ["A", "B", "D", "E", "I", "N", "Ñ", "O", "P", "Q", "U", "V", "W"];

export default defineTool({
  name: "get_alphabet_status",
  title: "Alphabet status",
  description:
    "Returns which letters of the La Servilleta alphabet have been found on real napkins, which have been deduced from the two known letters, and which are still missing.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const foundSet = new Set(FOUND);
    const deducedSet = new Set(DEDUCED);
    const missing = LETTERS.filter((l) => !foundSet.has(l) && !deducedSet.has(l));

    const summary = {
      total: LETTERS.length,
      found: FOUND,
      deduced: DEDUCED,
      missing,
      counts: { found: FOUND.length, deduced: DEDUCED.length, missing: missing.length },
    };

    return {
      content: [{ type: "text", text: JSON.stringify(summary, null, 2) }],
      structuredContent: summary,
    };
  },
});

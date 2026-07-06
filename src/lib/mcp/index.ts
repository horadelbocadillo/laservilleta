import { defineMcp } from "@lovable.dev/mcp-js";
import getAlphabetStatusTool from "./tools/get-alphabet-status";
import getProjectInfoTool from "./tools/get-project-info";

export default defineMcp({
  name: "la-servilleta-mcp",
  title: "La Servilleta",
  version: "0.1.0",
  instructions:
    "Tools for the La Servilleta project. Use `get_project_info` to learn what the project is and how people can contribute. Use `get_alphabet_status` to see which letters of the recovered alphabet are found, deduced, or still missing.",
  tools: [getAlphabetStatusTool, getProjectInfoTool],
});

import { defineTool } from "@lovable.dev/mcp-js";

const PROJECT_INFO = {
  name: "La Servilleta",
  url: "https://laservilleta.lovable.app",
  contact_email: "la.servilleta.908@gmail.com",
  twitter: "https://twitter.com/guiomargdp",
  summary:
    "La Servilleta is a project to recover an unknown typography used in the 1950s at the Salesianos «El Campillo» boarding school in Antequera, Málaga. The school marked every student's linen (napkins, sheets, towels) with their initials in blue thread, in a distinctive curved letterform. Only two letters (M and R) survive on a single napkin. The project asks the public to send photos of any other napkins/sheets with the same typography so the full alphabet can be reconstructed and released as a free digital font.",
  what_to_look_for:
    "Spanish boarding-school linen from the 1940s–60s with initials embroidered in blue thread in a curved, minimal-stroke style. Any single letter helps.",
  how_to_contribute:
    "Email a photo to la.servilleta.908@gmail.com or DM @guiomargdp on Twitter/X. A single photo is enough.",
};

export default defineTool({
  name: "get_project_info",
  title: "About La Servilleta",
  description:
    "Returns a summary of the La Servilleta project: what it is, how to contribute a photo of an embroidered napkin, and how to contact the project owner.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(PROJECT_INFO, null, 2) }],
    structuredContent: PROJECT_INFO,
  }),
});

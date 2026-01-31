import type { GetPreviews } from "@/types/preview";

export async function getPreviews(): GetPreviews {
  await new Promise((r) => setTimeout(r, 500));

  return [
    {
      id: 1,
      title: "Landing Page Draft",
      description: "AI-generated landing page preview.",
    },
    {
      id: 2,
      title: "Blog Post Outline",
      description: "Structured outline for technical content.",
    },
    {
      id: 3,
      title: "Product Update",
      description: "Changelog-style preview for release notes.",
    },
  ];
};
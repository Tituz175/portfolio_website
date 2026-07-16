import type { VercelRequest, VercelResponse } from "@vercel/node";
import { prisma } from "./_lib/prisma";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const [projects, researchAreas, publications, skills, experience, education, about] =
      await Promise.all([
        prisma.project.findMany({ orderBy: { order: "asc" } }),
        prisma.researchArea.findMany({ orderBy: { order: "asc" } }),
        prisma.publication.findMany({ orderBy: { order: "asc" } }),
        prisma.skillCategory.findMany({ orderBy: { order: "asc" } }),
        prisma.experienceEntry.findMany({ orderBy: { order: "asc" } }),
        prisma.educationEntry.findMany({ orderBy: { order: "asc" } }),
        prisma.aboutContent.findUnique({ where: { id: 1 } }),
      ]);

    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
    res.status(200).json({
      about,
      projects,
      research: { areas: researchAreas, publications },
      skills,
      experience,
      education,
    });
  } catch (err) {
    console.error("GET /api/content failed:", err);
    res.status(500).json({ error: "Failed to load content" });
  }
}

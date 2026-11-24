import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const guides = await getCollection("guides");
  const index = guides.map((g) => ({
    slug: g.id.replace(/\.md$/, ""),
    title: g.data.title,
    description: g.data.description,
    keyword: g.data.keyword,
    category: g.data.category,
  }));
  return new Response(JSON.stringify(index), {
    headers: { "Content-Type": "application/json" },
  });
};

import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  const site = import.meta.env.SITE;

  const [blogs, projects] = await Promise.all([
    getCollection("blogs"),
    getCollection("projects"),
  ]);

  const staticUrls = [
    { loc: "/", priority: "1.0" },
    { loc: "/blog", priority: "0.8" },
  ];

  const blogUrls = blogs.map((blog) => ({
    loc: `/blog/${blog.id}`,
    priority: "0.6",
    lastmod: blog.data.pubDate.toISOString().split("T")[0],
  }));

  const projectUrls = projects.map((project) => ({
    loc: `/project/${project.id}`,
    priority: "0.6",
  }));

  const allUrls = [...staticUrls, ...blogUrls, ...projectUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (url) => `  <url>
    <loc>${site}${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ""}
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};

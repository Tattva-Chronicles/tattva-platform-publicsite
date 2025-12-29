import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        "",
        "/vision",
        "/pillars",
        "/pillars/samvaad",
        "/pillars/seva",
        "/pillars/raksha",
        "/team",
        "/donate",
        "/contact",
        "/legal/privacy",
        "/legal/terms",
    ].map((route) => ({
        url: `${SITE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    return routes;
}

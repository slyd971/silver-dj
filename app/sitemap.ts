import type { MetadataRoute } from "next";
import { getDefaultClient } from "@/lib/clients";
import { resolveRequestClient } from "@/lib/clients/server";
import { buildClientSitemapEntries } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = (await resolveRequestClient()) ?? getDefaultClient();
  return buildClientSitemapEntries(client);
}

import type { MetadataRoute } from "next";
import { getDefaultClient } from "@/lib/clients";
import { resolveRequestClient } from "@/lib/clients/server";
import { getCanonicalUrl } from "@/lib/domains";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const client = (await resolveRequestClient()) ?? getDefaultClient();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", getCanonicalUrl(client)).toString(),
    host: new URL(getCanonicalUrl(client)).host,
  };
}

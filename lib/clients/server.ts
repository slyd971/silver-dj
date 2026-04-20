import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { getClientBySlug as getLocalClientBySlug } from "@/data/clients";
import { getAirtableClientByHost, getAirtableClientBySlug } from "@/lib/airtable";
import { getDefaultClient, getClientByHost as getLocalClientByHost } from "@/lib/clients";
import { isLocalHostname, normalizeHostname } from "@/lib/domains";

export type ClientSlugSearchParams = {
  client?: string;
  artist?: string;
};

export function getRequestedClientSlug(searchParams?: ClientSlugSearchParams) {
  return searchParams?.client ?? searchParams?.artist ?? null;
}

export async function getRequestHostname() {
  const requestHeaders = await headers();
  return normalizeHostname(
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host")
  );
}

export async function resolveRequestClient(slug?: string | null) {
  const hostname = await getRequestHostname();
  const normalizedSlug = slug?.toLowerCase() ?? null;

  return (
    (await getAirtableClientByHost(hostname)) ??
    (await getAirtableClientBySlug(normalizedSlug)) ??
    getLocalClientByHost(hostname) ??
    getLocalClientBySlug(normalizedSlug) ??
    (isLocalHostname(hostname) ? getDefaultClient() : null)
  );
}

export async function getRequiredRequestClient(slug?: string | null) {
  const client = await resolveRequestClient(slug);

  if (!client) {
    notFound();
  }

  return client;
}

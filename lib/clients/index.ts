import { getClientBySlug, getClients } from "@/data/clients";
import type { ClientConfig } from "@/data/clients/types";
import { isLocalHostname, normalizeHostname } from "@/lib/domains";

export { getClientBySlug, getClients };
export type { ClientConfig };

export const defaultClientSlug = "djslyd";

export function getDefaultClient() {
  const client = getClientBySlug(defaultClientSlug);

  if (!client) {
    throw new Error(`Default client "${defaultClientSlug}" is not registered.`);
  }

  return client;
}

export function getClientByHost(hostname?: string | null) {
  const normalizedHost = normalizeHostname(hostname);

  if (!normalizedHost) return null;

  for (const client of getClients()) {
    const domainHost = client.domain ? normalizeHostname(client.domain) : "";
    const vercelHost = normalizeHostname(client.vercelSubdomain);

    if (
      normalizedHost === domainHost ||
      normalizedHost === `www.${domainHost}` ||
      normalizedHost === vercelHost
    ) {
      return client;
    }
  }

  return null;
}

export function resolveClient(hostname?: string | null, slug?: string | null) {
  return (
    getClientByHost(hostname) ??
    getClientBySlug(slug) ??
    (isLocalHostname(hostname) ? getDefaultClient() : null)
  );
}

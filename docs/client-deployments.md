# Client deployments

This repository contains several press kits in one Next.js app. Each client has:

- a config in `data/clients/<client>.ts`
- optional Airtable seed files in `docs/airtable-seed/<client>/`
- public assets in one or more owned `public/` folders
- a dedicated Vercel project

## Clients

| Client | Slug | Vercel project | Public assets |
| --- | --- | --- | --- |
| DJ SLY'D | `djslyd` | `slyd-press-kit` | `public/press-kit`, `public/slyd`, `public/logos` |
| Silver DJ | `silver-dj` | `silver-dj` | `public/silver-dj` |
| Yoruboy DJ | `yoruboy-dj` | `yoruboy-dj-presskit` | `public/yoruboy` |

## Safe deployment

Always deploy through:

```bash
npm run deploy:client -- <client-slug>
```

Example:

```bash
npm run deploy:client -- silver-dj
```

The deploy script:

1. checks that the selected client has no missing referenced assets
2. fails if referenced production assets exceed 10MB
3. links the checkout to the correct Vercel project
4. generates a temporary `.vercelignore` that uploads only the selected client's referenced `public/` files
5. restores the default `.vercelignore` after the deploy command exits

## Asset checks

Run an audit without deploying:

```bash
npm run check:client -- silver-dj --strict
npm run check:client -- djslyd
npm run check:client -- yoruboy-dj
```

Use `--strict` when a client should be deploy-clean: no missing files, no referenced files over 10MB, and no unreferenced deployable files in that client's public folders.

## Current notes

- `silver-dj` is deploy-clean.
- `djslyd` has referenced assets over 10MB and unreferenced deployable files.
- `yoruboy-dj` references video files/posters that are not currently present and has oversized gallery files.

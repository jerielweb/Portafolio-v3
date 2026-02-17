# Incremental Static Regeneration (ISR) Strategy

## Overview
This portfolio implements **Incremental Static Regeneration (ISR)** to optimize performance and reduce server load. Pages are pre-rendered at build time and automatically revalidated at specified intervals.

## Revalidation Timeline

### Pages Configuration

| Route | Revalidate Interval | Reason |
|-------|-------------------|--------|
| `/` (Home) | 12 hours (43200s) | Hero section, skills, education, projects data - moderate update frequency |
| `/projects` | 24 hours (86400s) | Projects rarely change, stable content |
| `/collections` | 24 hours (86400s) | Collections are stable, infrequent updates |
| Root Layout | 24 hours (86400s) | Global metadata and structure |

### Component Strategy

| Component | Cache Strategy | Reason |
|-----------|-----------------|--------|
| Header | 7 days cache | Navigation links and CV download - rarely change |
| Footer | 30 days cache | Social links - very stable content |
| EducationsList | 7 days cache | Education data is static and stable |
| SkillsList | 7 days cache | Skills inventory changes infrequently |
| Contact | N/A (Client Component) | Form interaction handled client-side |

## How ISR Works

1. **Build Time**: All pages marked with `revalidate` are pre-rendered to static HTML at build time
2. **Request Time**: When a user visits a page, they get the cached static version instantly (blazing fast ⚡)
3. **Revalidation**: After the revalidate interval expires, the next request triggers a regeneration in the background
4. **While Regenerating**: Users continue to see the old cached version while the new version is being generated

## Code Examples

### Page with ISR
```typescript
// src/app/page.tsx
export const revalidate = 43200; // 12 hours

export default async function Home() {
  const heroData = await getHeroSections();
  // ... rest of component
}
```

### Server Component (no export needed)
```typescript
// src/components/Header.tsx
/**
 * Header Component - Server Component
 * ISR Strategy: Cache for 7 days (604800 seconds)
 * The revalidate timing is set at the page level that imports this component
 */
export default async function Header() {
  const headerData = await getHeaderData();
  // ... rest of component
}
```

## Benefits

✅ **Blazing Fast Performance**: Users always get cached static versions (instant load times)
✅ **Reduced Server Load**: Pages are pre-rendered, not dynamically generated per request
✅ **Fresh Content**: Automatic background regeneration keeps content up-to-date
✅ **Zero-Downtime Updates**: No request failures during sever outages or API issues
✅ **SEO Friendly**: Static HTML is better for search engine crawling

## Monitoring ISR

### Check Cache Status
Monitor the `.next` directory after build:
```bash
pnpm build
```

### Testing ISR Locally
ISR works during production builds. Test with:
```bash
pnpm build
pnpm start
```

### Revalidation on Demand
To manually trigger a revalidation (future enhancement):
```typescript
// Example: In an API route
import { revalidatePath } from 'next/cache';
revalidatePath('/');
```

## Configuration Files

- **next.config.ts**: Configured for optimal ISR with on-demand entries
- **Pages with revalidate export**: `/app/page.tsx`, `/app/projects/page.tsx`, `/app/collections/page.tsx`, `/app/layout.tsx`
- **Components with data fetching**: Header, Footer, EducationsList, SkillsList

## Future Enhancements

1. **Dynamic Routes**: If adding `[slug]` routes, implement `generateStaticParams()`
   ```typescript
   export async function generateStaticParams() {
     const projects = await fetchProjectData();
     return projects.map((project) => ({
       slug: project.slug,
     }));
   }
   ```

2. **On-Demand Revalidation**: Use `/api/revalidate` endpoints to trigger updates when CMS data changes

3. **Partial Pre-rendering (PPR)**: Enable in Next.js 15+ for even better performance

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Changes not appearing | Wait for revalidate interval or manually trigger rebuild |
| Stale data | Reduce revalidate interval or use on-demand revalidation |
| Build takes too long | Review number of pages and optimize API calls |

---

**Last Updated**: February 17, 2025
**Next.js Version**: 14+ with App Router

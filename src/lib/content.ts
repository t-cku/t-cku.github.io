import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content';

// Every page must go through this helper rather than calling getCollection()
// directly, so a draft entry can never slip onto the live site.
export async function getPublished<C extends CollectionKey>(
  collection: C
): Promise<CollectionEntry<C>[]> {
  const entries = await getCollection(collection, ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getFeatured<C extends CollectionKey>(
  collection: C,
  limit?: number
): Promise<CollectionEntry<C>[]> {
  const entries = await getPublished(collection);
  const featured = entries.filter((entry) => entry.data.featured);
  return typeof limit === 'number' ? featured.slice(0, limit) : featured;
}

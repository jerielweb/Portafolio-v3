import { CollectionsResponse, Collection } from "@/types/types.collections";

export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchCollectionsData(url: string): Promise<CollectionsResponse | undefined> {
    try {
        const response = await fetch(`${STRAPI_URL}${url}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching collections data:', error);
    }
}

export async function getCollectionsData(): Promise<Collection[]> {
    const response = await fetchCollectionsData("/api/collections?populate=*");
    return response?.data || [];
}
import type { HeaderApiResponse, HeaderData } from "@/types/types.header";

export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchHeaderData(url: string): Promise<HeaderApiResponse | null> {
    try {
        const response = await fetch(`${STRAPI_URL}${url}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = (await response.json()) as HeaderApiResponse;
        return json;
    } catch (error) {
        console.error('Error fetching header data:', error);
        return null;
    }
}

export async function getHeaderData(): Promise<HeaderData | null> {
    try {
        const response = await fetchHeaderData("/api/header?populate=*");
        return response?.data || null;
    } catch (error) {
        console.error('Error getting header data:', error);
        return null;
    }
}
import { FooterResponse, Footer } from "@/types/types.footer";

export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchFooterData(url: string): Promise<FooterResponse | undefined> {
    try {
        const response = await fetch(`${STRAPI_URL}${url}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching footer data:', error);
    }
}

export async function getFooterData(): Promise<Footer | null> {
    const response = await fetchFooterData("/api/footer?populate=*");
    return response?.data || null;
}
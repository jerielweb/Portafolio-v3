export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchSkilsData(url: string) {
    try {
        const response = await fetch(`${STRAPI_URL}${url}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch(error) {
        console.error('Error fetching skills data:', error);
        return null;
    }
}

export async function getSkilsSections() {
    const response = await fetchSkilsData("/api/technology-lists?populate=*");
    return response?.data || [];
}
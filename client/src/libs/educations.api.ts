import { EducationsList } from '@/types/types.educations';

export const BASE_URL = process.env.BASE_URL || 'http://localhost:1337';

export async function fetchEducationsData(url: string): Promise<{ data: EducationsList } | null> {
    try {
        const response = await fetch(`${BASE_URL}${url}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch(error) {
        console.error('Error fetching skills data:', error);
        return null;
    }
}

export async function getEducations(): Promise<EducationsList> {
    const response = await fetchEducationsData("/api/educations?populate=*");
    return response?.data || [];
}
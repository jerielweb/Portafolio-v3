import qs from 'qs';
export const BASE_URL = process.env.BASE_URL || 'http://localhost:1337';

const HERO_SECTIONS = {
  populate: {
    Image: {
      on: {
        "hero.profile": {
          populate: {
            profile: {
              fields: ["url"]
            }
          }
        }
      }
    }
  }
}

export async function getHeroSections() {
    const query = qs.stringify(HERO_SECTIONS)
    const reponse = await fetchHeroData(`/api/hero?${query}`);
    return reponse?.data;
}

export async function fetchHeroData(url: string) {
    try {
        const response = await fetch(`${BASE_URL}${url}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching hero data:', error);
        return null;
    }
}
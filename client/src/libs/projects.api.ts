import qs from 'qs';
export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

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

export async function getProyectsSections() {
    const query = qs.stringify(HERO_SECTIONS)
    const reponse = await fetchProjectData(`/api/projects?${query}`);
    return reponse?.data;
}

export async function fetchProjectData(url: string) {
    try {
        const response = await fetch(`${STRAPI_URL}${url}`);
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
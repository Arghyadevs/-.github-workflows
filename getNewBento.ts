const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Arghyadip%20Pakhira&g=Arghyadevs&x=Arghya_dip7&l=arghyadip-pakhira&i=https%3A%2F%2Farghyadevs.vercel.app%2Fassets%2FArghyalogo.png&p=arghyadevs.github.io&z=91d8b";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);

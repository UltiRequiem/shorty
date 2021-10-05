export const BASE_URL = "https://cleanuri.com/api/v1";

export default async function shorty(url: string): Promise<string> {
  new URL(url);

  const response = await fetch(`${BASE_URL}/shorten`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  const data: { result_url: string } = await response.json();

  return data.result_url;
}

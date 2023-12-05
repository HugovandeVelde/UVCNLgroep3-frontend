// Example using a hypothetical REST API endpoint
const API_BASE_URL = 'https://your-api.com';

export async function getFriends() {
  const response = await fetch(`${API_BASE_URL}/friends`);
  const data = await response.json();
  return data;
}

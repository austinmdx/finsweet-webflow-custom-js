import { API_HOST } from '../constant'
// Fetch articles

export const fetchArticles = async () => {
  try {
    console.log('api_host', API_HOST)
    const response = await fetch(`${API_HOST}/articles`);
    const data = await response.json();
    console.log('data:==', data);

    return data;
  } catch (error) {
    console.log('error:', error.message)
    return [];
  }
};

import { API_HOST } from '../constant'
// Fetch articles

export const fetchArticles = async () => {
  try {
    const response = await fetch(`${API_HOST}/articles`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log('error:', error.message)
    return [];
  }
};

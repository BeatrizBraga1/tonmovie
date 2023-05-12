export const API_KEY = '2ee57f5e9367e684c4fbb4b970267f8f';
export const API_BASE = 'https://api.themoviedb.org/3';

/* 
- ação
- comédia
- romance
*/

const basicFetch = async (endpoint: string) => {

  try {

    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;

  } catch (error) {

    console.error('Ocorreu um erro ao fazer a requisição:', error);
    throw error;

  }
};

export default {
  getHomeList: async () => {
      try {
        return [
          {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
          },
          {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
          },
          {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
          },
        ];
    } catch (error) {
      console.error('Ocorreu um erro ao obter a lista de filmes:', error);
      throw error;
    }
  },
};
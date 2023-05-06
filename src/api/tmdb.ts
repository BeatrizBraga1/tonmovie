const API_KEY = '2ee57f5e9367e684c4fbb4b970267f8f';
const API_BASE = 'https://api.themoviedb.org/3';

/* 
- ação
- comédia
- romance
*/

// Função para mandar o endpoint, ele faz a requisição e pega o resultado para nos mandar

const basicFetch = async (endpoint: string) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
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
  },
};
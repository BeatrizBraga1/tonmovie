import Tmdb from '../tmdb';

describe('API', () => {
  test('getHomeList retorna um array com os dados corretos', async () => {
    const homeList = await Tmdb.getHomeList();

    expect(Array.isArray(homeList)).toBe(true);
    expect(homeList.length).toBe(3);

    // Teste os dados para cada categoria
    homeList.forEach((category) => {
      expect(category).toHaveProperty('slug');
      expect(category).toHaveProperty('title');
      expect(category).toHaveProperty('items');
      expect(Array.isArray(category.items)).toBe(true);
    });
  });
});

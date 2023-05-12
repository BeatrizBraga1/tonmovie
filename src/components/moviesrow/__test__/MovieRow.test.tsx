import React from 'react';
import { render } from '@testing-library/react-native';
import MoviesRow from '../index';

jest.mock('../../api/Tmdb', () => ({
  getHomeList: jest.fn().mockResolvedValue([
    {
      slug: 'action',
      title: 'Ação',
      items: [
        {
          id: 1,
          title: 'Movie 1',
          poster_path: '/path/to/poster1.jpg',
        },
        {
          id: 2,
          title: 'Movie 2',
          poster_path: '/path/to/poster2.jpg',
        },
      ],
    },
  ]),
}));

describe('MoviesRow', () => {
  test('renderiza as linhas do filme corretamente', async () => {
    const { findAllByText, findAllByTestId } = render(<MoviesRow />);
  
    // Wait for the movie rows to load
    const movieTitles = await findAllByText(/Movie \d/);
    const moviePosters = await findAllByTestId('movie-poster');
  
    expect(movieTitles).toHaveLength(2);
    expect(moviePosters).toHaveLength(2);
  });
});

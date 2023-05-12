import React from 'react';
import { render } from '@testing-library/react-native';
import { fireEvent } from '@testing-library/react-native';
import MovieDetails from '../index';
import { GlobalContext } from '../../../context';

test('executa a ação de adicionar ao carrinho corretamente', async () => {
  const movies = {
    results: [
      { id: 1, title: 'Filme 1', poster_path: '/poster1.jpg' },
      { id: 2, title: 'Filme 2', poster_path: '/poster1.jpg' },
      { id: 3, title: 'Filme 3', poster_path: '/poster1.jpg' },
    ],
  };
  const handleAddItem = jest.fn(); // Função mock para simular a ação de adicionar ao carrinho

  const { getAllByTestId } = render(
    <GlobalContext.Provider
      value={{
        addedMovies: [],
        isMovieAdded: jest.fn(),
        handleAddItem: handleAddItem,
        removeMovieFromCart: jest.fn(),
        setAddedMovies: jest.fn(),
      }}
    >
      <MovieDetails movies={movies} />
    </GlobalContext.Provider>
  );

  const addButtons = getAllByTestId(/add-button-/);

  // Dispara o evento de clique em cada botão de adicionar
  await fireEvent.press(addButtons[0]);

  expect(handleAddItem).toHaveBeenCalledWith(
    movies.results[0].id.toString(),
    movies.results[0].poster_path,
    movies.results[0].title
  );
});

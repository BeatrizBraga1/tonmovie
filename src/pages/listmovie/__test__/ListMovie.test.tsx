import React from 'react';
import { render } from '@testing-library/react-native';
import ListMovies, { ListMoviesScreenNavigationProp } from '../index';

describe('Tela de Listagem de Filmes', () => {
  test('renderiza os componentes Navbar e MoviesRow', () => {
    const navigationMock: ListMoviesScreenNavigationProp = {
      navigate: jest.fn(),
    } as any;

    const { getByTestId } = render(<ListMovies navigation={navigationMock} />);

    const navbarComponent = getByTestId('navbar-component');
    const moviesRowComponent = getByTestId('movies-row-component');

    expect(navbarComponent).toBeTruthy();
    expect(moviesRowComponent).toBeTruthy();
  });
});
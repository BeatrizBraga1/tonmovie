import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Home from '../index';

describe('Home screen', () => {
  test('navega para a tela ListMovies quando o botão "Entrar" é pressionado', () => {
    const navigationMock = {
      navigate: jest.fn(),
    } as any;

    const { getByTestId } = render(<Home navigation={navigationMock} />);

    const entrarButton = getByTestId('entrar-button');
    fireEvent.press(entrarButton);

    expect(navigationMock.navigate).toHaveBeenCalledWith('ListMovies');
  });
});

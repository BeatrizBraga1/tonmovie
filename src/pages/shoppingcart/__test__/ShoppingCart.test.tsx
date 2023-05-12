import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ShoppingCart, { ShoppingCartScreenNavigationProp } from '../index';
import { GlobalContextProvider, GlobalContext } from '../../../context';

describe('ShoppingCart screen', () => {
  test('renderiza a mensagem de carrinho vazio quando não há filmes adicionados', () => {
    const navigationMock = useNavigation() as ShoppingCartScreenNavigationProp;

    const { getByText } = render(
      <GlobalContextProvider>
        <ShoppingCart navigation={navigationMock} />
      </GlobalContextProvider>
    );

    const emptyCartMessage = getByText('Carrinho de compras vazio');

    expect(emptyCartMessage).toBeTruthy();
  });

  test('processa itens do carrinho quando há filmes adicionados', () => {
    const navigationMock = useNavigation() as ShoppingCartScreenNavigationProp;

    const addedMovies = [
      {
        id: '1',
        posterPath: '/poster1.jpg',
        title: 'Movie 1',
      },
      {
        id: '2',
        posterPath: '/poster2.jpg',
        title: 'Movie 2',
      },
    ];

    const { getByText, getAllByTestId } = render(
      <GlobalContextProvider>
        <ShoppingCart navigation={navigationMock} />
      </GlobalContextProvider>
    );

    // Mock the added movies in the global context
    const { setAddedMovies } = useContext(GlobalContext);
    setAddedMovies(addedMovies);

    const cartItems = getAllByTestId('cart-item');
    const cartItemCount = getByText(
      `${addedMovies.length} Produto${addedMovies.length === 1 ? '' : 's'} adicionado${
        addedMovies.length === 1 ? '' : 's'
      }`
    );

    expect(cartItems.length).toBe(addedMovies.length);
    expect(cartItemCount).toBeTruthy();
  });

  test('chama removeMovieFromCart quando o botão remover é pressionado', () => {
    const navigationMock = useNavigation() as ShoppingCartScreenNavigationProp;

    const addedMovies = [
      {
        id: '1',
        posterPath: '/poster1.jpg',
        title: 'Movie 1',
      },
      {
        id: '2',
        posterPath: '/poster2.jpg',
        title: 'Movie 2',
      },
    ];

    const { getByTestId } = render(
      <GlobalContextProvider>
        <ShoppingCart navigation={navigationMock} />
      </GlobalContextProvider>
    );

    // Mock the added movies in the global context
    const { setAddedMovies, removeMovieFromCart } = useContext(GlobalContext);
    setAddedMovies(addedMovies);

    const removeButtons = getByTestId('remove-button');

    // Simulate clicking the remove button for the first movie
    fireEvent.press(removeButtons[0]);

    expect(removeMovieFromCart).toHaveBeenCalledTimes(1);
    expect(removeMovieFromCart).toHaveBeenCalledWith(addedMovies[0]);
  });
});

import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Navbar, { NavbarScreenNavigationProp } from "../index";

describe("Navbar Component", () => {
  const navigationMock: NavbarScreenNavigationProp = {
    navigate: jest.fn(),
    goBack: jest.fn(),
  } as any;

  test("renderiza o logotipo quando a propriedade showLogo é verdadeira", () => {
    const { getByTestId } = render(
      <Navbar navigation={navigationMock} showLogo={true} />
    );
    const logo = getByTestId("logo");
    expect(logo).toBeDefined();
  });

  test("não renderiza o logotipo quando a propriedade showLogo é falsa", () => {
    const { queryByTestId } = render(
      <Navbar navigation={navigationMock} showLogo={false} />
    );
    const logo = queryByTestId("logo");
    expect(logo).toBeNull();
  });

  test("chama a navigation.goBack quando o botão voltar é pressionado", () => {
    const { getByTestId } = render(
      <Navbar navigation={navigationMock} showLogo={false} />
    );
    const backButton = getByTestId("back-button");
    fireEvent.press(backButton);
    expect(navigationMock.goBack).toHaveBeenCalledTimes(1);
  });

  test("chama a navigation.navigate quando o botão do carrinho é pressionado", () => {
    const { getByTestId } = render(
      <Navbar navigation={navigationMock} showLogo={true} />
    );
    const cartButton = getByTestId("cart-button");
    fireEvent.press(cartButton);
    expect(navigationMock.navigate).toHaveBeenCalledTimes(1);
    expect(navigationMock.navigate).toHaveBeenCalledWith("ShoppingCart");
  });
});
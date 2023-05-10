import Home from './src/pages/home';
import ListMovies from './src/pages/listmovie';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCart from './src/pages/shoppingcart';
import { GlobalContextProvider } from './context';
import MovieDetails from './src/components/moviedetails';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <GlobalContextProvider> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ListMovies"
            component={ListMovies}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ShoppingCart"
            component={ShoppingCart}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MovieDetails"
            component={MovieDetails}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContextProvider>
  );
}

import Home from './src/pages/home/Home';
import ListMovies from './src/pages/listmovie/ListMovies';

import {NavigationContainer} from '@react-navigation/native';
//tipo de navegação
import {createStackNavigator} from '@react-navigation/stack'
import ShoppingCart from './src/pages/shoppingcart/ShoppingCart';

export default function App() {

  const Stack = createStackNavigator();

  return (
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
        </Stack.Navigator>
      </NavigationContainer>
  );
}

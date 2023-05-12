import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useGlobalContext } from '../../context';
import { Movie } from '../../context';

//components
import Navbar from '../../components/navbar';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';

export type ShoppingCartScreenNavigationProp = StackNavigationProp<ParamListBase, 'ListMovie'>;

interface ShoppingCartProps {
  navigation: ShoppingCartScreenNavigationProp;
}

export default function ShoppingCart({ navigation }: ShoppingCartProps) {
  const { addedMovies, removeMovieFromCart } = useGlobalContext();

  const handleRemoveMovie = (movie: Movie) => {
    removeMovieFromCart(movie);
  };

  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} showLogo={false} />
      {addedMovies.length > 0 ? (
        <View style={styles.containerList}>
          <Text style={styles.titleCart}>{addedMovies.length} {addedMovies.length === 1 ? 'Produto' : 'Produtos'} adicionado{addedMovies.length === 1 ? '' : 's'}</Text>
          <ScrollView>
            {addedMovies.map((movie, index) => (
              <View style={styles.itemContainer} key={index}>
                <Image source={{ uri: `https://image.tmdb.org/t/p/w300${movie.posterPath}` }} style={styles.image} />
                <Text style={styles.titleMovie}>{movie.title}</Text>
                <TouchableOpacity onPress={() => handleRemoveMovie(movie)}>
                  <MaterialIcons name="highlight-remove" size={35} color="#d24646" />
                </TouchableOpacity>
              </View>
            ))}
           </ScrollView>
        </View>
      ) : (
        <Text style={styles.titleVazio}>Carrinho de compras vazio</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  titleCart: {
    fontSize: 25,
    fontWeight: "900",
    color: '#0C1D8F',
    marginBottom: 20,
  },
  titleVazio: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#dedede',
    fontWeight: "700",
    color: '#0C1D8F',
  },
  image: {
    width: 50,
    height: 70,
    marginRight: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    justifyContent: 'space-between',
  },
  containerList: {
    padding: 20,
  },
  titleMovie: {
    fontSize: 20,
    color:'#0C1D8F',
    fontWeight: '600',
    maxWidth: 220,
  }
});
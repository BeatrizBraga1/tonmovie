import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useGlobalContext } from '../../context';

interface MovieDetailsProps {
  movies: any;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movies }) => {
  const { isMovieAdded, handleAddItem } = useGlobalContext();

  const handleAddToCart = (movieId: string, posterPath: string, title: string) => {
    handleAddItem(movieId, posterPath, title);
  };

  return (
    <ScrollView 
      horizontal 
      contentContainerStyle={styles.rowContainer}
      showsHorizontalScrollIndicator={true}
    >
      <View style={styles.content}>
        {movies.results.map((movie: any, key: number) => (
          <View key={key} style={styles.movie}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w300${movie.poster_path}` }} style={styles.imgLogo} />
            <Text style={styles.movieTitle}>
              {movie.title.length > 25 ? `${movie.title.substring(0, 25)}...` : movie.title}
            </Text>
            <TouchableOpacity 
              activeOpacity={0.6} 
              style={styles.buttonAdd}  
              onPress={() => handleAddToCart(movie.id.toString(), movie.poster_path, movie.title)}
            >
              <AntDesign  
                name={isMovieAdded(movie.id.toString()) ? 'minuscircleo' : 'pluscircleo'} 
                size={25}  
                color={isMovieAdded(movie.id.toString()) ? 'red' : '#35852e'} 
              />
              <Text style={styles.textAdd}>{isMovieAdded(movie.id.toString()) ? 'Remover' : 'Adicionar'}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    alignItems: 'flex-start',
  },
  content: {
    flexDirection: 'row',
    marginRight: 20,
    flexShrink: 1,
    marginBottom: 20,
  },
  movie: {
    justifyContent: 'space-between',
    maxWidth: 160,
    marginEnd: 10,
  },
  imgLogo: {
    marginBottom: 10,
    width: 160,
    height: 200,
  },
  buttonAdd: {
    backgroundColor: 'rgba(169, 180, 194, 0.5)',
    padding: 8,
    paddingEnd: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    flexDirection: 'row',
  },
  textAdd: {
    marginLeft: 10,
    fontSize: 16,
  },
  movieTitle: {
    fontWeight: '900',
    fontSize: 18,
    marginBottom: 10,
  },
});


export default MovieDetails
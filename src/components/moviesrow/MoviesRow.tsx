import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

//components
import Tmdb from '../../api/tmdb';
import MovieDetails from '../moviedetails/MovieDetails';


const MoviesRow: React.FC = () => {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    const loadAll = async () => {
      const fetchedList = await Tmdb.getHomeList();
      setList(fetchedList);
    }

    loadAll();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Nossos filmes</Text>
        </View>

        {list.map((movie, key) => (
          <View key={key} style={styles.containerTwo}>
            <View style={styles.containerTwoTitle}>
              <Text style={styles.titleMovie}>{movie.title}</Text>
            </View>
            <MovieDetails title={movie.title} movies={movie.items}/>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTwo: {
    paddingStart: 20,
    paddingEnd: 20,
  },
  containerTwoTitle: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  containerTitle: {
    flexDirection: 'row',
    paddingEnd: 20,
    paddingStart: 20,
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    fontWeight: '900',
    color: '#0C1D8F',
  },
  titleMovie: {
    fontSize: 25,
    fontWeight: '600',
    color: '#0C1D8F',
  },

});

export default MoviesRow;
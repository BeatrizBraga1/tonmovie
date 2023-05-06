import {useEffect, useState} from 'react';
import { 
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import {AntDesign} from '@expo/vector-icons';


const MovieRow: React.FC<{ title: string; movies: any }> = ({ movies }) => {


    return (
        <ScrollView
            horizontal={true}
            contentContainerStyle={styles.rowContainer}
            showsHorizontalScrollIndicator={false}
        >
        <View style={styles.content}>
            {/* Se tiver filmes então roda o map */}
            {movies.results.length > 0 &&
            movies.results.map((movie: any, key: number) => (
                <View key={key} style={styles.movie}>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w300${movie.poster_path}` }}
                    style={styles.imglogo}
                />
                <Text style={styles.movieTitle}> {movie.title && movie.title.length > 25
                    ? `${movie.title.substring(0, 25)}...`
                    : movie.title}</Text>
                <Text style={styles.movieValue}>R$15,00</Text>
                <TouchableOpacity activeOpacity={0.6} style={styles.buttonAdd}>
                    <AntDesign name="pluscircleo" size={25} color="#35852e" />
                    <Text style={styles.textAdd}>Adicionar</Text>
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

    container:{
    },

    containerTwo:{
        flexDirection: 'row',
        padding: 20,
    },

    title:{
        fontSize: 25,
        fontWeight: "900",
        color: '#0C1D8F',
    },

    content:{
        flexDirection: 'row',
        marginRight: 20,
        maxWidth: 150, // Defina uma largura máxima para cada item
        flexShrink: 1,
        marginBottom: 20,
        
    },

    movie:{
        justifyContent: "space-between",
    },

    imglogo:{
        marginBottom: 10,
        width: 160,
        height:200,
    },

    buttonAdd:{
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

    buttonRemove:{
        backgroundColor: 'rgba(169, 180, 194, 0.5)',
        padding: 8,
        paddingEnd: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        flexDirection: 'row',

    },

    textRemove: {
        marginLeft: 10,
        fontSize: 16,
    },

    movieTitle:{
        fontWeight: "900",
        fontSize: 18,
        marginBottom: 10,
    },

    movieCategory:{
        fontSize: 16,
        marginBottom: 5
    },

    movieValue:{
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "700",
        color: '#0C1D8F',
    }
})

export default MovieRow;
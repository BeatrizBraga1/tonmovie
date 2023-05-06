import {useEffect, useState} from 'react';
import { 
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import Tmdb from '../../api/tmdb';

import {AntDesign, FontAwesome} from '@expo/vector-icons';
import MovieRow from './movierow/MovieRow';


const MovieDetails: React.FC = () => {
    const [list, setList] = useState<any[]>([]);

    useEffect(() => {
      const loadAll = async () => {
        // Pegando a lista total
        const fetchedList = await Tmdb.getHomeList();
        setList(fetchedList); // Atualize o valor de list usando o hook useState
      }
  
      loadAll();
    }, []);

    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Nossos filmes</Text>
                <AntDesign name="filter" size={35} color='#0C1D8F' />
            </View>
            
            {list.map((movie, key) => (
                <View style={styles.containerTwo}>
                <View style={styles.containerTwoTitle}>
                    <Text style={styles.titleMovie}>{movie.title}</Text>
                </View>
                    
                <View style={styles.arrowList}>
                    <AntDesign 
                        name="left" 
                        size={35} 
                        color='#0C1D8F'
                        style={styles.arrowLeft}
                    />
                    <AntDesign 
                        name="right" 
                        size={35} 
                        color='#0C1D8F'
                        style={styles.arrowRight}
                    />
                </View>
                <MovieRow key={key} title={movie.title} movies={movie.items} />
                </View>
            ))}
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container:{
    },

    containerTwo:{
        padding: 20,
    },

    containerTwoTitle:{
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'space-between',
    },

    arrowList: {
        position: 'absolute',
        zIndex: 999999,
        alignItems: 'center',
        justifyContent: 'space-between',
        top: '45%',
        transform: [{ translateY: -12 }],
        paddingEnd: 20,
        paddingStart: 20,
        flexDirection: 'row',
        right: 0,
        left: 0,
    },

    arrowLeft: {
        backgroundColor: 'rgba(169, 180, 194, 0.7)',
        borderRadius: 30,
        padding: 6,
        
    },

    arrowRight: {
        backgroundColor: 'rgba(169, 180, 194, 0.7)',
        borderRadius: 30,
        padding: 6,
        
    },

    containerTitle:{
        flexDirection: 'row',
        paddingEnd: 20,
        paddingStart: 20,
        paddingTop: 20,
        justifyContent: 'space-between',
    },

    title:{
        fontSize: 25,
        fontWeight: "900",
        color: '#0C1D8F',
    },

    titleMovie:{
        fontSize: 25,
        fontWeight: "600",
        color: '#0C1D8F',
    },

    content:{
        alignItems: 'center',
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
})

export default MovieDetails;
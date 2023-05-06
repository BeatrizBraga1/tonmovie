import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

//components
import Navbar from '../../components/navbar/Navbar';
import MovieDetails from '../../components/moviedetails/MovieDetails';
import Filter from '../../components/filter/Filter';

//bibliotecas
import {AntDesign} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
        <Image source={require('../../../assets/logo_ton_movie.png')} style={styles.imglogo}/>
        <Text style={styles.title}>Bem vindo a Ton Movie, aqui você encontra os melhores filmes!</Text>
        <TouchableOpacity style={styles.buttonEnter}>
          <Text style={styles.buttonText}>Entrar</Text>
          <AntDesign name="arrowright" size={20} color="#0c1d8f"/>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9b4c2',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  title: {
    color: '#0c1d8f',
    fontSize: 18,
    fontWeight: '700',
    paddingStart: 30,
    paddingEnd: 30,
    textAlign: 'center',
    marginTop: 20,
  },

  imglogo:{
    marginBottom: 10,
    width: 200,
    height:80,
  },

  buttonEnter: {
    flexDirection: 'row',
    backgroundColor: '#758599',
    padding: 20,
    borderRadius: 25,
    marginTop: 40,
    alignItems: 'center'
  },

  buttonText: {
    fontSize: 20,
    marginEnd: 5,
    fontWeight: '700',
    color: '#0c1d8f',
  }

});
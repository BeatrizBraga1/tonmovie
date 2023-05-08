import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

//bibliotecas
import {AntDesign} from '@expo/vector-icons';

//navigation
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';

type HomeScreenNavigationProp = StackNavigationProp<ParamListBase, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

export default function Home({ navigation }: HomeProps) {
  return (
    <View style={styles.container}>
        <Image source={require('../../../assets/logo_ton_movie.png')} style={styles.imglogo}/>
        <Text style={styles.title}>Bem vindo a Ton Movie, aqui você encontra os melhores filmes!</Text>
        <TouchableOpacity style={styles.buttonEnter} onPress={()=> navigation.navigate('ListMovies')}>
          <Text style={styles.buttonText}>Entrar</Text>
          <AntDesign 
            name="arrowright" 
            size={20} 
            color="#0c1d8f"
          />
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
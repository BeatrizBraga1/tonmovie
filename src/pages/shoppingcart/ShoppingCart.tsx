import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

//components
import Navbar from '../../components/navbar/Navbar';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';

type ShoppingCartScreenNavigationProp = StackNavigationProp<ParamListBase, 'ListMovie'>;

interface ShoppingCartProps {
  navigation: ShoppingCartScreenNavigationProp;
  posterPath: string;
  title: string;
}

export default function ShoppingCart({ navigation, posterPath, title }: ShoppingCartProps) {
  const [cart, setCart] = useState<{ posterPath: string; title: string }[]>([]);

  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} showLogo={false}/>
      {cart.map((item, index) => (
        <View style={styles.container} key={index}>
          <Text style={styles.titleCart}>2 Produtos adicionados</Text>
          <View>
            <Text>{title}</Text>
            <Image source={{ uri: posterPath }} />
          </View>
          <TouchableOpacity>
            <MaterialIcons name="highlight-remove" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ))}

      {cart.length === 0 && <Text style={styles.titleVazio}>Carrinho de compras vazio</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleCart: {
    fontSize: 25,
    fontWeight: "900",
    color: '#0C1D8F',
  },
  titleVazio: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#dedede',
    borderRadius: 20,
    fontWeight: "700",
    color: '#0C1D8F',
  }
});
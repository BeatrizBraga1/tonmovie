import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

//navigation
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";

type NavbarScreenNavigationProp = StackNavigationProp<ParamListBase, "ListMovie">;

interface NavbarProps {
  navigation: NavbarScreenNavigationProp;
  showLogo?: boolean; // Adicionando uma propriedade opcional para mostrar o logo
}

// Android ou iOS
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 60;

export default function Navbar({ navigation, showLogo = true }: NavbarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {showLogo ? ( // Renderizar o logo somente se showLogo for true
          <Image
            source={require("../../../assets/logo_ton_movie.png")}
            style={styles.imglogo}
          />
        ) : (
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.buttonBack}
            onPress={() => navigation.goBack()} // Voltar à tela anterior ao pressionar o botão
          >
            <AntDesign 
              name="arrowleft" 
              size={24} 
              color="#0C1D8F" 
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.buttonCart}
          onPress={() => navigation.navigate("ShoppingCart")}
        >
          <AntDesign 
            name="shoppingcart" 
            size={35} 
            color="#0C1D8F" 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a9b4c2",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingEnd: 20,
  },

  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  imglogo: {
    marginBottom: 10,
    width: 160,
    height: 60,
  },

  buttonCart: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 8,
    paddingEnd: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 55 / 2,
  },

  buttonBack: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

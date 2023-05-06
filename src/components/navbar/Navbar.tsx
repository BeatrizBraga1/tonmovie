import React from "react";
import { 
    View,
    StyleSheet,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
} from "react-native";

import {AntDesign} from '@expo/vector-icons';


//android ou ios
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 60;

export default function Navbar () {

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={require('../../../assets/logo_ton_movie.png')} style={styles.imglogo}/>
                <TouchableOpacity activeOpacity={0.6} style={styles.buttonCart}>
                    <AntDesign name="shoppingcart" size={35} color="#0C1D8F" />
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#a9b4c2',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingEnd: 20,
    },

    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    imglogo:{
        marginBottom: 10,
        width: 160,
        height:60,
    },

    buttonCart:{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 8,
        paddingEnd: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 55 / 2,

    }
})
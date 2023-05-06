import React from "react";
import { 
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import {useState} from 'react';

import {AntDesign, FontAwesome} from '@expo/vector-icons';
import {CheckBox} from 'react-native-elements';


export default function Navbar () {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = () => {
      setIsChecked(!isChecked);
    };

    return(
        <View style={styles.container}>
            <View style={styles.containerTwo}>
                <FontAwesome name="remove" size={24} color="black" />
                <View>
                    <CheckBox 
                         checked={isChecked}
                         onPress={handleCheck}
                    />
                    <Text>Todas categorias</Text>
                    <AntDesign name="filter" size={35} color='#0C1D8F' />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        zIndex: 1000,
        backgroundColor: 'rgba(169, 180, 194, 0.6)',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    containerTwo:{
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
    },

    title:{
        fontSize: 25,
        fontWeight: "900",
        color: '#0C1D8F',
    },
})
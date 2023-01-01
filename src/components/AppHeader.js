import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Surface } from "react-native-paper";
import { FontAwesome5 } from '@expo/vector-icons';
export const AppHeader = () => {
    return (
        <Surface style={styles.header}>
            <View style={styles.boxLogo}>
                <FontAwesome5 name="dice" size={32} color="white" />
                <View style={styles.titleContainer}>
                    <Text style={styles.titleStyles}>Gerador de jogos</Text>
                </View>
            </View>
        </Surface>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop:35,
        height: 90,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#4263EB',
    },
    view: {
        flex: 1,
        
    },
    logo: {
        width: 120,
    },
    boxLogo:{
        marginLeft: 20,
        flexDirection:'row',
        alignItems:'center',
    },
    titleContainer:{
        alignItems:'center',
        marginTop:10,
        marginLeft:20
    },
    titleStyles:{
        fontSize:20,
        color: 'white',
        fontWeight: 'bold',
    }
})
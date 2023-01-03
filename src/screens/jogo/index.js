import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { AppHeader } from "../../components/AppHeader";

const Game = () => {
  const [number, setNumber] = useState("");
  const [listaDeNumeros, setListaDeNumeros] = useState([]);
  const [count, setCount] = useState(1);

  const random = () => {
    let numeros = Math.floor(Math.random() * 59) + 1;
    if (count <= +number) {
      if (+number > 0 || +number <= 60) {
        if (listaDeNumeros.indexOf(numeros) === -1)
        setListaDeNumeros([...listaDeNumeros, numeros]);
      }
      setCount(count + 1);
    }
  };

   useEffect(() => {
    random();
   }, [count]);

   

  
  const reset = () => {
    if(listaDeNumeros != 0){
      setListaDeNumeros(listaDeNumeros.length = 0);
    }
    return false;
  }

  return (
    <View style={styles.container}>
      <AppHeader />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 80,
          flexWrap:"wrap"
        }}
      >
        {
          listaDeNumeros != 0 ?
          listaDeNumeros?.map((num, i) => {
            return (
              <View
                key={i}
                style={{
                  backgroundColor: "#00AB69",
                  borderRadius: 30,
                  height: 40,
                  width: 40,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#f2f2f2", fontWeight: "bold" }}>
                  {num}
                </Text>
              </View>
            );
          })
          :
          <View></View>
        }
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TextInput
          style={{
            backgroundColor: "white",
            height: 50,
            width: "80%",
            borderRadius: 12,
            paddingLeft: 20,
          }}
          keyboardType="number-pad"
          placeholder="Insira a quantidade de numeros"
          onChangeText={(text) => setNumber(text)}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#4263EB",
            width: 180,
            height: 50,
            borderRadius: 12,
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
            elevation: 3,
          }}
          onPress={() => random()}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            Gerar números
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#4263EB",
            width: 180,
            height: 50,
            borderRadius: 12,
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
            elevation: 3,
          }}
          onPress={() => reset()}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            Limpar jogo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Game;

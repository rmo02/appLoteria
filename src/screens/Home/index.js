import { View, Text, BackHandler, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import Megasena from "../../components/Megasena";
import Quina from "../../components/Quina";
import Lotofacil from "../../components/Lotofacil";
import Lotomania from "../../components/Lotomania";
import Supersete from "../../components/Supersete";
import { AppHeader } from "../../components/AppHeader";

const Home = () => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }, []);

  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>
          Confira os principais resultados
        </Text>
      </View>
      <ScrollView>
        <Megasena />
        <Quina />
        <Supersete />
        <Lotofacil />
        <Lotomania />
      </ScrollView>
    </View>
  );
};

export default Home;

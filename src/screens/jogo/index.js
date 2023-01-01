import { View, Text, Button } from 'react-native'
import React, { useState } from 'react';
import styles from "./styles";
import { AppHeader } from '../../components/AppHeader';

const Game = () => {
  const [sorteados, setSorteados] = useState();

  function sorteio () {
    setSorteados(Math.floor(Math.random() * 61));
  }
 

  return (
    <View style={styles.container}>
      <AppHeader />
      <View>
        <Text>{sorteados}</Text>
        <Button
        title='Gerar Número'
        onPress={()=>sorteio()}
        />
      </View>
    </View>
  )
}

export default Game
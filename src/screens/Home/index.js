import { View, Text, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles';

const Home = () => {
  
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () =>{
      return true
    })
  }, [])


  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

export default Home;
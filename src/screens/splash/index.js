import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {
  const navigation = useNavigation();

  const [loop, setLoop] = useState(true);

  useEffect(
    () => {
      let timer = setTimeout(() => setLoop(false), 3000);
      return () => {
        clearTimeout(timer);
      };
    },[]);

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center',  backgroundColor: "#EDF2FF"}}>
       <LottieView source={require('../../../assets/winner.json')}
         style={{backgroundColor:'#f2f2f2'}}
         autoPlay
         loop={loop}
         onAnimationFinish={()=> navigation.navigate('Home')}
         />
    </View>
  )
}

export default SplashScreen;
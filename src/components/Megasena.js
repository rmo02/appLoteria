import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

function Megasena() {

    const [mega, setMega] = useState([]);
    const [numMega, setNumMega] = useState()
    
    useEffect(() => {
      getMega();
    }, [])
  
    
  
    //route get
    const getMega = async() => {
      try {
        const res = await axios.get('https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena')
        setMega(res.data);
        setNumMega(res.data.dezenasSorteadasOrdemSorteio)
      } catch (error) {
        console.log(error);
      }
    }
  


  return (
    <View style={{marginTop: 20,}}>
      <View style={{marginHorizontal:20, borderRadius:10,}}>
     <View style={{marginLeft:10}}>
     <Text style={{ fontSize: 18, fontWeight: "500", color:'#00AB69' }}>Mega sena</Text>
     </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        {numMega?.map((num) => {
          return (
            <View
            key={num}
              style={{
                backgroundColor: "#00AB69",
                borderRadius: 30,
                height: 40,
                width: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#f2f2f2" }}>{num}</Text>
            </View>
          );
        })}
      </View>
      <View style={{marginTop:10, marginLeft:10}}>
        <Text>Próximo Concurso {mega.dataProximoConcurso}</Text>
        <Text>Valor estimado R${mega.valorEstimadoProximoConcurso}</Text>
      </View>
      </View>
    </View>
  );
}

export default Megasena;

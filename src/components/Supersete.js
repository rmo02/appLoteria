import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

function Supersete() {

    const [sete, setSete] = useState([]);
    const [numSete, setNumSete] = useState()
    
    useEffect(() => {
      getSete();
    }, [])
  
    
  
    //route get
    const getSete = async() => {
      try {
        const res = await axios.get('https://servicebus2.caixa.gov.br/portaldeloterias/api/supersete')
        setSete(res.data);
        setNumSete(res.data.dezenasSorteadasOrdemSorteio)
      } catch (error) {
        console.log(error);
      }
    }
  


  return (
    <View style={{marginTop: 20}}>
      <View style={{marginHorizontal:20, borderRadius:10}}>
     <View style={{marginLeft:10}}>
     <Text style={{ fontSize: 18, fontWeight: "500", color:'#ACCE76' }}>Super sete</Text>
     </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        {numSete?.map((num, i) => {
          return (
            <View
            key={i}
              style={{
                backgroundColor: "#ACCE76",
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
        <Text>Próximo Concurso {sete.dataProximoConcurso}</Text>
        <Text>Valor estimado R${sete.valorEstimadoProximoConcurso}</Text>
      </View>
      </View>
    </View>
  );
}

export default Supersete;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

function Quina() {

    const [quina, setQuina] = useState([]);
    const [numQuina, setNumQuina] = useState()
    
    useEffect(() => {
      getQuina();
    }, [])
  
    
  
    //route get
    const getQuina = async() => {
      try {
        const res = await axios.get('https://servicebus2.caixa.gov.br/portaldeloterias/api/quina')
        setQuina(res.data);
        setNumQuina(res.data.dezenasSorteadasOrdemSorteio)
      } catch (error) {
        console.log(error);
      }
    }
  


  return (
    <View style={{marginTop: 20}}>
      <View style={{marginHorizontal:20, borderRadius:10}}>
     <View style={{marginLeft:10}}>
     <Text style={{ fontSize: 18, fontWeight: "500", color:'#115FA1' }}>Quina</Text>
     </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        {numQuina?.map((num) => {
          return (
            <View
            key={num}
              style={{
                backgroundColor: "#115FA1",
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
        <Text>Próximo Concurso {quina.dataProximoConcurso}</Text>
        <Text>Valor estimado R${quina.valorEstimadoProximoConcurso}</Text>
      </View>
      </View>
    </View>
  );
}

export default Quina;

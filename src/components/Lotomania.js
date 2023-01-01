import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

function Lotomania() {

    const [mania, setMania] = useState([]);
    const [numMania, setNumMania] = useState()
    
    useEffect(() => {
      getMania();
    }, [])
  
    
  
    //route get
    const getMania = async() => {
      try {
        const res = await axios.get('https://servicebus2.caixa.gov.br/portaldeloterias/api/lotomania')
        setMania(res.data);
        setNumMania(res.data.dezenasSorteadasOrdemSorteio)
      } catch (error) {
        console.log(error);
      }
    }
  


  return (
    <View style={{marginTop: 20}}>
      <View style={{marginHorizontal:20, borderRadius:10}}>
     <View style={{marginLeft:10}}>
     <Text style={{ fontSize: 18, fontWeight: "500", color:'#F79D31' }}>Lotomania</Text>
     </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 20,
          flexWrap:"wrap"
        }}
      >
        {numMania?.map((num) => {
          return (
            <View
            key={num}
              style={{
                backgroundColor: "#F79D31",
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
        <Text>Próximo Concurso {mania.dataProximoConcurso}</Text>
        <Text>Valor estimado R${mania.valorEstimadoProximoConcurso}</Text>
      </View>
      </View>
    </View>
  );
}

export default Lotomania;

import React from "react";  
import { Text, View } from "react-native";
import { styles } from "./styles";

interface ContagemProps{
    ehCriada: boolean;
    numero: number;
}
export function Contagem({ehCriada, numero}: ContagemProps){
    let style = null;
    if(ehCriada){
        style = styles.criadaText;
    }else{
        style = styles.concluidaText;
    }
    return(
        <View style={styles.contentBox}>
            <Text style={style}>{ehCriada ? "Criadas": "Concluídas"}</Text>
            <Text style={styles.countText}>{numero}</Text>
        </View>
    );
}
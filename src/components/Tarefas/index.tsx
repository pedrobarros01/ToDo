import React, { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import IconFeather  from "react-native-vector-icons/Feather";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconIonicons from "react-native-vector-icons/Ionicons"
import { styles } from "./styles";

interface ITarefaProps{
    tarefa: string;
    setCheck: (check: boolean, tarefa: string) => void;
    handleDelete: (tarefa: string) => void;
}


export function Tarefa({tarefa, setCheck, handleDelete}: ITarefaProps ){
    const [marcadoCheck, setMarcadoCheck] = useState(false);
    const [marcadoDelete, setMarcadoDelete] = useState(false);
    function handlePressionar(){
        let marcado = !marcadoCheck ? true : false;
        setMarcadoCheck(!marcadoCheck);
        setCheck(marcado, tarefa);

    }
    function handleDeleteMarcado(){
        if(!marcadoDelete){
            handleDelete(tarefa)
        }
        setMarcadoDelete(!marcadoDelete);
        
        
    }


    //checkcircle
    return(
        <View style={styles.containerTask} >
            <TouchableHighlight
            onPress={handlePressionar} 
            style={styles.button}
            >
                { 
                !marcadoCheck ? <IconFeather 
                name="circle" 
                size={30}
                color="#4EA8DE"
                /> :
                <IconAntDesign 
                name="checkcircle"
                size={30}
                color="#4EA8DE"
                />
            }
            </TouchableHighlight>
            <Text 
            style={styles.text}
            
            >
                {tarefa}
            </Text>
            <TouchableHighlight
            onPressIn={handleDeleteMarcado}
            onPressOut={handleDeleteMarcado}
            style={styles.button}
            underlayColor={"#808080"}
            activeOpacity={100}
            >
                <IconIonicons 
                name="trash-outline" 
                
                size={30}
                color={ marcadoDelete ? "#E25858":"#808080"}
                />
            </TouchableHighlight>
        </View>
    );
}
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Contagem } from "../components/Contagem";
import { Header } from "../components/Header";
import { Tarefa } from "../components/Tarefas";
import { styles } from "./styles";



export function Home(){
    

    return(
        <View style={styles.backgroundToDo}>
            <View  style={styles.form}>
                <TextInput 
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={"#808080"}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contagemBox}>
                <Contagem ehCriada numero={0} />
                <Contagem ehCriada={false} numero={0} />
            </View>
            <Tarefa />
        </View>
    );
}
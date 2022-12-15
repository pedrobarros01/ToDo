import React from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Contagem } from "../components/Contagem";
import { Header } from "../components/Header";
import { ListaVazia } from "../components/ListaVazia";
import { Tarefa } from "../components/Tarefas";
import { styles } from "./styles";


const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
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
            <FlatList 
            data={array}
            keyExtractor={(item: number) => item.toString()}
            renderItem={() => (<Tarefa />)}
            showsVerticalScrollIndicator={false}
            style={styles.list}
            ListEmptyComponent={() => (<ListaVazia />)}
            />
        </View>
    );
}
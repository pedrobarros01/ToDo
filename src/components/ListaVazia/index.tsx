import React from "react";
import { Text, View } from "react-native";
import IconFoudation from "react-native-vector-icons/Foundation";
import { styles } from "./styles";

export function ListaVazia(){

    return (
        <View style={styles.boxEmpty}>
            <IconFoudation 
                name="clipboard-pencil"
                size={100}
                color="#808080"
            />
            <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.subtitle}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    );
}
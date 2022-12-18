import React, { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Contagem } from "../components/Contagem";
import { ListaVazia } from "../components/ListaVazia";
import { Tarefa } from "../components/Tarefas";
import { styles } from "./styles";
import IconAntDesign from "react-native-vector-icons/AntDesign";

interface ITarefaType{
    info: string;
    check: boolean;
}

export function Home(){
    const [listTarefas, setListTarefas] = useState<ITarefaType[]>([]);
    const [tarefaInfo, setTarefaInfo] = useState("");
    const [countTarefas, setCountTarefas] = useState(0);
    const [countCheck, setCountCheck] = useState(0);

    function handleAddList(){
        const itemTarefa = listTarefas.find(item => item.info === tarefaInfo);
        if(itemTarefa){
            return Alert.alert("ERRO", "Ja tem essa tarefa");
        } 
        const objTarefa: ITarefaType = {
            info: tarefaInfo,
            check: false,
        };
        const listaAux = [...listTarefas, objTarefa];
        setListTarefas(prevState => [...prevState, objTarefa]);
        setTarefaInfo("");
        setCountTarefas(listaAux.length);
    }
    function setCheck(check: boolean, tarefa: string){
        const newListaTarefas = listTarefas.map(item =>{
            if(item.info === tarefa){
                item.check = check;
            }
            return item;
        });
        setListTarefas(newListaTarefas);
        let listaAux = newListaTarefas.filter(item => item.check === true);
        setCountCheck(listaAux.length);
    }
    function handleDelete(tarefa: string){
        const novaListaTarefas = listTarefas.filter(item => item.info !== tarefa);
        setListTarefas(novaListaTarefas);
        let listaAux = novaListaTarefas.filter(item => item.check === true);
        setCountCheck(listaAux.length);
        setCountTarefas(novaListaTarefas.length);
    }


    return(
        <View style={styles.backgroundToDo}>
            <View  style={styles.form}>
                <TextInput 
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={"#808080"}
                onChangeText={setTarefaInfo}
                value={tarefaInfo}
                />
                <TouchableOpacity 
                style={styles.button}
                onPress={handleAddList}
                >
                    <Text style={styles.textButton}>
                        <IconAntDesign 
                            name="pluscircleo"
                        />
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contagemBox}>
                <Contagem ehCriada numero={countTarefas} />
                <Contagem ehCriada={false} numero={countCheck} />
            </View>
            <FlatList 
            data={listTarefas}
            keyExtractor={(item: ITarefaType) => item.info}
            renderItem={({item}) => (
                <Tarefa 
                    tarefa={item.info}
                    setCheck={setCheck}
                    handleDelete={handleDelete}             
                />
            )}
            showsVerticalScrollIndicator={false}
            style={styles.list}
            ListEmptyComponent={() => (<ListaVazia />)}
            />
        </View>
    );
}
import React from "react";
import { Text, View } from "react-native";
import IconFeather  from "react-native-vector-icons/Feather";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconIonicons from "react-native-vector-icons/Ionicons"
import { styles } from "./styles";
export function Tarefa(){
    //checkcircle
    return(
        <View style={styles.containerTask} >
            <IconFeather 
            name="circle" 
            size={30}
            color="#4EA8DE"
            />
            <Text 
            style={styles.text}
            
            >
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </Text>
            <IconIonicons 
            name="trash-outline" 
            size={30}
            color="#808080"
            />
        </View>
    );
}
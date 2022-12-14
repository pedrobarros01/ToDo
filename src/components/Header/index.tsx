import React from "react";
import { Image, View } from "react-native";
import Logo from "../../../assets/Logo.png"
import { styles } from "./styles";
export function Header(){

    return(
        <View style={styles.backgroundHeader}>
            <Image source={Logo} style={styles.image} />
        </View>
    );
}
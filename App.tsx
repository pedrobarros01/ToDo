import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import removeFalse from "./assets/removeFalse.png";
import removeTrue from "./assets/removeTrue.png";
export default function App() {
  const [pressionar, setPressionar] = useState(false);
  function handlePressionar(){
    setPressionar(true);
  }
  function handleDespressionar(){
    setPressionar(false);
  }
  return (
    <View style={styles.container}>
      <TouchableHighlight
      onPress={() => console.log("Ola mundo")}
      style={styles.button} 
      onShowUnderlay={handlePressionar}
      onHideUnderlay={handleDespressionar}
      >
          {
            pressionar ? <Image source={removeTrue}/> : <Image source={removeFalse}/>
          }
      </TouchableHighlight>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    width: 56,
    borderRadius: 5
  }
});

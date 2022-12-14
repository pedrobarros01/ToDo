import { StatusBar } from 'react-native';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import removeFalse from "./assets/removeFalse.png";
import removeTrue from "./assets/removeTrue.png";
import { Header } from './src/components/Header';
import { Home } from './src/Home';
export default function App() {
  
  return (
    <>
      <View style={styles.container}>
        <Header />
        <Home />
      </View>
      <StatusBar 
      barStyle={"light-content"}
      backgroundColor="transparent"
      translucent
      />
    </>
   
  );
}
/* 
const [pressionar, setPressionar] = useState(false);
  function handlePressionar(){
    setPressionar(!pressionar);
  }
<TouchableHighlight
      onPress={() => console.log("Ola mundo")}
      style={styles.button} 
      onShowUnderlay={handlePressionar}
      onHideUnderlay={handleDespressionar}
      >
          {
            pressionar ? <Image source={removeTrue}/> : <Image source={removeFalse}/>
          }
      </TouchableHighlight> */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
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

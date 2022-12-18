import { StatusBar } from 'react-native';
import {  StyleSheet, View } from 'react-native';
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  }
});

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {//functional component
  const [outputText, setOutputText]=useState('Open up App.tsx to start working on your app!');//an array of state using the {useState} react hook
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Change Text" onPress={()=>setOutputText('The text changed')} />
      <Button title="change it again" onPress={()=>setOutputText('Changed again')}/>

    </View>
  );//view is similar to div
}
/**
breaking down use state hooks:
    +we provide an array of states; the first one being the default one
    +to trigger a state change, we simply reassingn the second element of usestate's value  
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

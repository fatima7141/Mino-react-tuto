import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  //functional component
  {
    /* const [outputText, setOutputText]=useState('Open up App.tsx to start working on your app!');//an array of state using the {useState} react hook
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Change Text" onPress={()=>setOutputText('The text changed')} />
      <Button title="change it again" onPress={()=>setOutputText('Changed again')}/>

    </View>
  )*/
  } //view is similar to div

  /**
breaking down use state hooks:
    +we provide an array of states; the first one being the default one
    +to trigger a state change, we simply reassingn the second element of usestate's value  
 */
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals]=useState([] as string[]);

  const inputHandler_Goal = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };  //two way data binding
  const addGoalHandler=()=>{
    //console.log(enteredGoal);
    //setCourseGoals([...courseGoals, enteredGoal]); somehow bad implementation
    setCourseGoals(currentGoal=>[...currentGoal, enteredGoal])
  };/**
  * So courseGoal would be an empty array at first
  * spread operator unloads all the contents of an interrable
  * setCourseGoals would be an array as well
  */


  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        {/*in react native, flexbox is triggered by default; layout is by default horizontal; use flex direction to change this
         * Main axis depends on the flexDirection chosen (including direction)
         * Child elements would be organized around the mani axis
         * add the flex prop to the children to fully control the children propery (setup to control things inside of a flexBox)
         * flex takes a relative number (relative to each children's flex prop) | flex:1
         * alignItems positions elements along the cross axis (perpendicular to main axis)
         */}
        <TextInput
          placeholder=" Course Goal"
          style={styles.textInput}
          onChangeText={inputHandler_Goal}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <View>
        
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  //creates a JS object
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderBottomColor: "black",
    borderWidth: 1,
    width: "80%",
  },
});

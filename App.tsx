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
  const [courseGoals, setCourseGoals]  = useState([] as string[]);

  const inputHandler_Goal = (enteredText: string) => {
    setEnteredGoal(enteredText);
  }; //two way data binding
  const addGoalHandler = () => {
    //console.log(enteredGoal);
    //setCourseGoals([...courseGoals, enteredGoal]); somehow bad implementation
    //we are trying to get the latest input in; function is triggered on click so no input 
    //courseGoals will always take the former value of setCourseGoals
    //we simply pass the old values to courseGoals
    //let's run it:
    /**
     * 1-enteredGoal will be returned to the setCourseGoals so courseGoals=enteredGaol[0]
     * 2-a new enteredGoal has been entered so thats passed to courseGoals again
     * 3-currentGoal would receive the aggregated values of all the goals
     * 4-so we receive the present value (aggregated former values of courseGoals) + the new value every time 
     */
    setCourseGoals((currentGoal) => [...currentGoal, enteredGoal]);
  };
  /**
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
          placeholder=" Course Goals"
          style={styles.textInput}
          onChangeText={inputHandler_Goal}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map((goal) =><View style={styles.listItem} ><Text key={goal}>{goal}</Text></View>)}
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
  listItem:{
    padding:10,
    backgroundColor:'#ccc',
    borderBottomColor:'black',
    borderWidth:1,
    marginVertical:6


  }
});

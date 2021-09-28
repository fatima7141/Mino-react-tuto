import React, { useState } from "react";  
import {Modal ,View, Button, Text, StyleSheet, TextInput} from "react-native";

const GoalInput=(props:any)=>{
    const [enteredGoal, setEnteredGoal] = useState("");
    
    const inputHandler_Goal = (enteredText: any) => {
        setEnteredGoal(enteredText);
      }; //two way data binding
    return (
        <Modal visible={props.visible} animationType= "slide">
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
            <Button title="Add" onPress={()=>props.onAddGoal(enteredGoal)} />
        </View>
      </Modal>
    )
    {/**onAddGoal exists on app.tsx; we simply pass a variable to it here */}
    {/**anonymous function is used here so that the function doesn't trigger on render */}
    {/**props is used to pass a data declared in its template to that component */}
    {/**ScrollView has some performance drawback as every element is rendered; we'd rather use another element for something potentially very long-use flatlist instead */}
      {/**
     *       <ScrollView>
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
     */}
//we'll pass the title from the component from which it was called like a function
    }
    
const styles=StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex:1,
        marginBottom:10
      },//flex tells the flexbox (view) how much space to take; 
      //view  only takes the space its children needs
      //flex takes proportional space (doesnt have to be 1)
      textInput: {
        borderBottomColor: "black",
        borderWidth: 1,
        width: "80%",
      },
});

export default GoalInput;
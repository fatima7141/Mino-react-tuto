import React from "react";  
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from "react-native";
const GoalItem= (props:any) =>{
    return (
    <TouchableOpacity onPress={props.onDelete}>
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
    </TouchableOpacity>
    )
};//we'll pass the title from the component from which it was called like a function
//many types of touchables

const styles=StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: "#ccc",
        borderBottomColor: "black",
        borderWidth: 1,
        marginVertical: 6,
}});

export default GoalItem;
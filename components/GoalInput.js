import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <View style={styles.InputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Absorb this course."
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  InputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingBottom: 24,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 8,
    marginRight: 8,
  },
});
export default GoalInput;

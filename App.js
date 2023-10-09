import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.InputContainer}>
        <TextInput style={styles.textInput} placeholder="Absorb this course." />
        <Button title="Add Goal"></Button>
      </View>
      <View>
        <Text>List of goals.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  InputContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    padding: 8,
    marginRight: 8,
  },
});

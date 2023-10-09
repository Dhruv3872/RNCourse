import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View> */}
      <Text style={styles.importantTexts}>hamburger!</Text>
      {/* </View> */}
      <Text>That's what I would like to buy!</Text>
      <Button title="dO NOT CLICK ME." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  importantTexts: {
    margin: 16,
    borderWidth: 1,
    borderColor: "red",
    padding: 16,
  },
});

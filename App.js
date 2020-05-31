import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Button,
  StatusBar,
  Platform,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello! React Native.</Text>
      <Button
        color="lightgreen"
        title="Click Me"
        onPress={() => console.log("Button Tapped")}
      ></Button>
      <Button
        title="Click Me button 2"
        onPress={() =>
          Alert.alert("My title", "My message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      ></Button>

      <Button
        color="orange"
        title="Click Me button 3"
        onPress={() =>
          Alert.prompt("My title", "My message", (text) => console.log(text))
        }
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

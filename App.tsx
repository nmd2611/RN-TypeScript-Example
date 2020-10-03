import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MyButton from "./reusables/Button";

export default function App() {
  const [cnt, setCnt] = useState<number>(0);

  return (
    <View style={styles.container}>
      <MyButton
        content="handle press"
        handlePress={() => {
          setCnt((prev) => prev + 1);
        }}
        containerStyle={{ backgroundColor: "greenyellow" }}
        textStyle={{ color: "grey" }}
      />
      <Text>{cnt}</Text>
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
});

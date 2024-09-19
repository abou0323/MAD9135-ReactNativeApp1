import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import React, { useState } from "react";

export default function HomePage({ navigation }) {
  const [buttonPressed, setButtonPressed] = useState(false);
  const [firstFeedback, setFirstFeedback] = useState(false);

  const handlePressRecipeFeedback = () => {
    setButtonPressed(true);
    setFirstFeedback(firstFeedback === false ? true : false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          Try the best gingerbread cookie recipe!!
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Recipe")}
        >
          <Text style={styles.buttonText}>See Recipe</Text>
        </Pressable>

        <Pressable
          style={[styles.button, { marginBottom: 50 }]}
          onPress={() => navigation.navigate("Ingredients")}
        >
          <Text style={styles.buttonText}>See Ingredients</Text>
        </Pressable>

        <Button
          title="Did you like the recipe? Click here!"
          onPress={handlePressRecipeFeedback}
        ></Button>
        {buttonPressed && (
          <Text style={styles.recipeFeedback}>
            {firstFeedback ? "Hooray!" : "Glad you liked it!"}
          </Text>
        )}
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    paddingBottom: 20,
  },
  button: {
    width: 320,
    height: 50,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    borderRadius: 18,
    backgroundColor: "#D21F3C",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  recipeFeedback: {
    fontSize: 16,
    textAlign: "center",
    margin: 10,
    color: "#800000",
  },
});

import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import RecipeButton from "../components/RecipeButton";
import IngredientsButton from "../components/IngredientsButton";

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
        <RecipeButton navigation={navigation} theme="large" />
        <IngredientsButton navigation={navigation} theme="large" />
        <View style={{ marginVertical: 20 }} />
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
  recipeFeedback: {
    fontSize: 16,
    textAlign: "center",
    margin: 10,
    color: "#800000",
  },
});

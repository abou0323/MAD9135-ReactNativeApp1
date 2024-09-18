import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Try the best gingerbread cookie recipe!!</Text>
        <Button
          title="See Recipe"
          onPress={() => navigation.navigate("Recipe")}
        ></Button>
        <Button
          title="See Ingredients"
          onPress={() => navigation.navigate("Ingredients")}
        ></Button>
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
    // paddingTop: 48,
  },
});

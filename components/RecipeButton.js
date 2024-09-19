import { Pressable, Text, StyleSheet } from "react-native";

export default function RecipeButton({ navigation, theme }) {
  if (theme === "large") {
    return (
      <Pressable
        style={[styles.button, { width: 320, marginBottom: 20 }]}
        onPress={() => navigation.navigate("Recipe")}
      >
        <Text style={[styles.buttonText, { fontSize: 18 }]}>See Recipe</Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate("Recipe")}
    >
      <Text style={styles.buttonText}>See Recipe</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 160,
    height: 50,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    borderRadius: 18,
    backgroundColor: "#D21F3C",
    margin: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

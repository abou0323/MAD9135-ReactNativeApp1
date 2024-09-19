import { Pressable, Text, StyleSheet } from "react-native";

export default function HomeButton({ navigation }) {
  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate("Home")}
    >
      <Text style={styles.buttonText}>Back to Home</Text>
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

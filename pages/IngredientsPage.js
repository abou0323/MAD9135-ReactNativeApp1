import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";

export default function ListPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </Pressable>

        <Pressable
          style={[styles.button]}
          onPress={() => navigation.navigate("Recipe")}
        >
          <Text style={styles.buttonText}>See Recipe</Text>
        </Pressable>
      </View>
      <Text
        style={{
          fontSize: 18,
          margin: 10,
          textAlign: "center",
        }}
      >
        Click an ingredient for a special tip
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable onPress={() => alert(item.tip)}>
            <Text
              style={{
                padding: 16,
                fontSize: 16,
                backgroundColor: "#ffcbd1",
                margin: 5,
              }}
            >
              {item.nameFullAndMeasurement}
            </Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const data = [
  {
    id: "1",
    name: "flour",
    nameFull: "all-purpose flour",
    measurement: "3 and 1/2 cups (440g)",
    nameFullAndMeasurement: "3 and 1/2 cups (440g) all-purpose flour",
    tip: "Flour should be spooned & leveled",
  },
  {
    id: "2",
    name: "baking-soda",
    nameFull: "baking soda",
    measurement: "1 teaspoon",
    nameFullAndMeasurement: "1 teaspoon baking soda",
    tip: "No special tip",
  },
  {
    id: "3",
    name: "salt",
    nameFull: "salt",
    measurement: "1/2 teaspoon",
    nameFullAndMeasurement: "1/2 teaspoon salt",
    tip: "No special tip",
  },
  {
    id: "4",
    name: "ginger",
    nameFull: "ground ginger",
    measurement: "1 Tablespoon",
    nameFullAndMeasurement: "1 Tablespoon ground ginger",
    tip: "Yes, 1 full Tablespoon!",
  },
  {
    id: "5",
    name: "cinnamon",
    nameFull: "ground cinnamon",
    measurement: "1 Tablespoon",
    nameFullAndMeasurement: "1 Tablespoon ground cinnamon",
    tip: "Can adjust to your liking",
  },
  {
    id: "6",
    name: "allspice",
    nameFull: "ground allspice",
    measurement: "1/2 teaspoon",
    nameFullAndMeasurement: "1/2 teaspoon ground allspice",
    tip: "No special tip",
  },
  {
    id: "7",
    name: "cloves",
    nameFull: "ground cloves",
    measurement: "1/2 teaspoon",
    nameFullAndMeasurement: "1/2 teaspoon ground cloves",
    tip: "No special tip",
  },
  {
    id: "8",
    name: "butter",
    nameFull: "unsalted butter",
    measurement: "10 Tablespoons (2/3 cup; 145g)",
    nameFullAndMeasurement:
      "10 Tablespoons (2/3 cup; 145g) unsalted butter, softened to room temperature",
    tip: "Don't soften too much! Room temperature butter is cool to the touch and about 18°C",
  },
  {
    id: "9",
    name: "brown-sugar",
    nameFull: "light or dark brown sugar",
    measurement: "3/4 cup (150g)",
    nameFullAndMeasurement: "3/4 cup (150g) packed light or dark brown sugar",
    tip: "No special tip",
  },
  {
    id: "10",
    name: "molasses",
    nameFull: "unsulphured or dark molasses",
    measurement: "2/3 cup (160ml; about 200g)",
    nameFullAndMeasurement:
      "2/3 cup (160ml; about 200g) unsulphured or dark molasses",
    tip: "Do not use blackstrap",
  },
  {
    id: "11",
    name: "egg",
    nameFull: "large egg",
    measurement: "1",
    nameFullAndMeasurement: "1 large egg, at room temperature",
    tip: "No special tip",
  },
  {
    id: "12",
    name: "vanilla",
    nameFull: "pure vanilla extract",
    measurement: "1 teaspoon",
    nameFullAndMeasurement: "1 teaspoon pure vanilla extract",
    tip: "No special tip",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

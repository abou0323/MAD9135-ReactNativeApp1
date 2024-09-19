import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import IngredientsPage from "./pages/IngredientsPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Recipe" component={RecipePage} />
        <Stack.Screen name="Ingredients" component={IngredientsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

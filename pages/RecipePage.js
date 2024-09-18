import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";

export default function RecipePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Button
            title="See Ingredients"
            onPress={() => navigation.navigate("Ingredients")}
          ></Button>

          <Image
            source={require("../assets/gingerbread-cookie.jpg")}
            style={{
              borderColor: "#eee",
              borderWidth: 5,
              width: 300,
              height: 400,
            }}
          />
          <Text style={{ fontWeight: "bold" }}>Instructions</Text>
          <Text>
            {"\n"}In a large bowl, whisk together the flour, baking soda, salt,
            ginger, cinnamon, allspice, and cloves. Set aside. In a large bowl
            using a handheld mixer or stand mixer fitted with a paddle
            attachment, beat the butter for 1 minute on medium speed until
            completely smooth and creamy. Add the brown sugar and molasses and
            beat on medium high speed until combined and creamy. Scrape down the
            sides and bottom of the bowl as needed. Next, beat in egg and
            vanilla on high speed for 2 full minutes. Scrape down the sides and
            bottom of the bowl as needed. The butter may separate; that’s ok.
            {"\n"}Add the flour mixture to the wet ingredients, and beat on low
            speed until combined. The cookie dough will be quite thick and
            slightly sticky. Divide dough in half and place each onto a large
            piece of plastic wrap. Wrap each up tightly and pat down to create a
            disc shape. Chill discs for at least 3 hours and up to 3 days.
            Chilling is mandatory for this cookie dough. I always chill mine
            overnight.
            {"\n"}Preheat oven to 350°F (177°C). Line 2-3 large baking sheets
            with parchment paper or silicone baking mats. (Always recommended
            for cookies.) Set aside.
            {"\n"}Remove 1 disc of chilled cookie dough from the refrigerator.
            Generously flour a work surface, as well as your hands and the
            rolling pin. Roll out disc until 1/4-inch thick. Tips for
            rolling—the dough may crack and be crumbly as you roll. What’s
            helpful is picking it up and rotating it as you go. Additionally,
            you can use your fingers to help meld the cracking edges back
            together. The first few rolls are always the hardest since the dough
            is so stiff, but re-rolling the scraps is much easier. Cut into
            shapes. Place shapes 1 inch apart on prepared baking sheets. Re-roll
            dough scraps until all the dough is shaped. Repeat with remaining
            disc of dough.
            {"\n"}Bake cookies for about 9-10 minutes. If your cookie cutters
            are smaller than 4 inches, bake for about 8 minutes. If your cookie
            cutters are larger than 4 inches, bake for about 11 minutes. My oven
            has hot spots and yours may too—so be sure to rotate the pan once
            during bake time. Keep in mind that the longer the cookies bake, the
            harder and crunchier they’ll be. For soft gingerbread cookies,
            follow my suggested bake times.
            {"\n"}Allow cookies to cool for 5 minutes on the cookie sheet.
            Transfer to cooling rack to cool completely. Once completely cool,
            decorate as desired.
          </Text>
        </View>
      </ScrollView>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: 48,
  },
});

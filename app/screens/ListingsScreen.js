import { View, FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket For Sale!",
    subtitle: 200,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Red Jacket For Sale!",
    subtitle: 100,
    image: require("../assets/jacket.jpg"),
  },
];

const ListingsScreen = () => {
  return (
    <View style={styles.listingsScreen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.subtitle}
            image={item.image}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listingsScreen: {
    marginTop: 50,
    backgroundColor: colors.light,
    padding: 20,
  },
});
export default ListingsScreen;

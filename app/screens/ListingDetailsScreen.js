import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View style={styles.listingDetailsContainer}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Red Jacket For Sale</Text>
        <Text style={styles.price}>$100</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/irfan.jpg")}
            title="Irfan Fattekhan"
            subtitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  listingDetailsContainer: {
    width: "100%",
    height: "100%",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    //fontWeight: 500,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    //fontWeight: 500,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 30,
  },
});
export default ListingDetailsScreen;

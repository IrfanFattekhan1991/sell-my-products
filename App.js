import { StyleSheet, View } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/components/ListingEditScreen";
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        image={require("./app/assets/irfan.jpg")}
        title="Irfan"
        subtitle="Irfan"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});

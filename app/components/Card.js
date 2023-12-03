import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../config/colors";

const Card = ({ title, image, subTitle }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginBottom: 20,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    marginBottom: 10,
  },
  subTitle: {
    color: "blue",
    fontWeight: "bold",
  },
});
export default Card;

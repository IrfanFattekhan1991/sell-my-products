import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

const AppButton = ({ title, onPress, color = "primary" }) => {
  return (
    <TouchableOpacity
      style={[styles.loginButton, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },
});

export default AppButton;

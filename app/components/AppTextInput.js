import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, StyleSheet, View } from "react-native";
import colors from "../config/colors";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.dark}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.light,
    borderRadius: 25,
    width: "100%",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  textInput: {
    fontSize: 18,
  },
  icon: {
    marginRight: 10,
  },
});
export default AppTextInput;

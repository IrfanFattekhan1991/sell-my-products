import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ListItemDelete = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.deleteItem}>
        <MaterialCommunityIcons
          name="trash-can"
          color={colors.white}
          size={35}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  deleteItem: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ListItemDelete;

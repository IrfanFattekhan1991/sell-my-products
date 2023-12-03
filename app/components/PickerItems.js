import { Text, StyleSheet, TouchableOpacity } from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";
const PickerItems = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 10,
  },
});
export default PickerItems;

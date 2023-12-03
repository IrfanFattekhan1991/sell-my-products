import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Button,
  FlatList,
} from "react-native";
import colors from "../config/colors";
import { Modal } from "react-native";
import { useState } from "react";
import PickerItems from "./PickerItems";

const AppPicker = ({
  icon,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.dark}
              style={styles.icon}
            />
          )}
          <Text style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.dark}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible}>
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItems
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
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
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontSize: 18,
  },
});
export default AppPicker;

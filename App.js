import { StyleSheet, View, TextInput, Text } from "react-native";

import AppTextInput from "./app/components/AppTextInput";
import { Switch } from "react-native";
import { useState } from "react";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];
export default function App() {
  const [category, setCategory] = useState();
  return (
    <View style={styles.container}>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="User Name" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});

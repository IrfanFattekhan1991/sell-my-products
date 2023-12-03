import { FlatList, Platform, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import { SafeAreaView } from "react-native";
import ListItemSeparator from "../components/ListItemSeperator";
import ListItemDelete from "../components/ListItemDelete";
import { useState } from "react";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/irfan.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/irfan.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const deleteHandler = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <SafeAreaView style={styles.userContainer}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => console.log(item)}
            title={item.title}
            subtitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDelete onPress={() => deleteHandler(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/irfan.jpg"),
            },
          ])
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    paddingTop: Platform.OS === "android" ? 50 : 0,
    flex: 1,
  },
});
export default MessagesScreen;

import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";

const ListItem = ({
  image,
  title,
  subtitle,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.detailsContainer}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View>
              <Text style={styles.name}>{title}</Text>
              {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 45,
    marginHorizontal: 10,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: colors.medium,
  },
});
export default ListItem;

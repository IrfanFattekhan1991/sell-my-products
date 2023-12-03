import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const Icon = ({
  name,
  size = 50,
  backgroundColor = colors.black,
  iconColor = colors.white,
}) => {
  return (
    <View
      style={{
        marginTop: 10,
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
};

export default Icon;

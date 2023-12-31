import { Text, StyleSheet } from "react-native";

const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return <Text style={styles.error}>{error}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
export default ErrorMessage;

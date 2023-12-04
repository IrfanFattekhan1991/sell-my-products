import * as Yup from "yup";
import { StyleSheet, View, Image } from "react-native";
import { Formik } from "formik";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="account"
              name="name"
              keyboardType="name-phone-pad"
              placeholder="Name"
              textContentType="name"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              name="email"
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
            />

            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton title="Register" />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 60,
    marginBottom: 20,
  },
});
export default RegisterScreen;

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Switch,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";

export default function App() {
  // const [name, setName] = useState("");
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // return (
  //   <SafeAreaView style={styles.container}>
  //     <TextInput
  //       style={styles.input}
  //       value={name}
  //       onChangeText={setName}
  //       placeholder="Enter text here"
  //       keyboardType="default"
  //       secureTextEntry={true}
  //       autoCorrect={true}
  //       autoCapitalize="words"
  //     />

  //     <TextInput
  //       style={[styles.input, styles.multilineText]}
  //       placeholder="Message"
  //       multiline
  //     />

  //     <Text style={styles.text}>My name is {name}</Text>
  //     <View style={styles.switchContainer}>
  //       <Text style={styles.text}>Dark Mode</Text>
  //       <Switch
  //         value={isDarkMode}
  //         onValueChange={() => setIsDarkMode((previousState) => !previousState)}
  //         trackColor={{ false: "#bcb8bfff", true: "#c25eaeff" }}
  //         thumbColor={isDarkMode ? "#ee93eeff" : "#ffffffff"}
  //       />
  //     </View>
  //   </SafeAreaView>
  // );

  //Login Form ->

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      // Proceed with login
      console.log("Submitted", username, password);
      setUsername("");
      setPassword("");
      setErrors({});
    }
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 150}
      style={styles.container}
    >
      <View style={styles.form}>
        <Image
          source={require("./assets/adaptive-icon.png")}
          style={styles.image}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
        {errors.username ? (
          <Text style={styles.errorText}>{errors.username}</Text>
        ) : null}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
        />
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}
        <Button title="Login" onPress={handleLogin} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    margin: 20,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  form: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  image: {
    width: 200,
    height: 400,
    alignSelf: "center",
    marginBottom: 50,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

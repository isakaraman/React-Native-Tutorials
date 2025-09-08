import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import CustomButton from "./components/CustomButton/custombutton.android";

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome!</Text>
          <CustomButton
            title="Press Me"
            onPress={() => alert("Button Pressed!")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        fontSize: 30,
        color: "purple",
        fontStyle: "italic",
      },
      android: {
        fontSize: 20,
        color: "darkred",
        fontStyle: "normal",
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
});

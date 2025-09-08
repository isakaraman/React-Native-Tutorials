import { useState } from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import Greet from "./components/Greet";

const localImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="red" animating></ActivityIndicator>
      <StatusBar backgroundColor={"lightblue"} barStyle={"dark-content"} />
      <ScrollView>
        <Text style={styles.title}>Hello World</Text>

        <Pressable onPress={() => alert("image pressed")}>
          <Image
            source={localImg}
            style={[styles.image, styles.boxShadow, styles.androidShadow]}
          />
        </Pressable>

        <Pressable onPress={() => alert("text pressed")}>
          <Text style={[styles.text, styles.boxShadow, styles.androidShadow]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Text>
        </Pressable>
        <View style={{ marginVertical: 20 }}>
          <Button
            title="Open Modal"
            onPress={() => setIsModalVisible(true)}
            color="midnightblue"
          ></Button>
        </View>
        <Button
          title="Alert"
          onPress={() =>
            Alert.alert("Invalid Data", "Press Ok", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
              },
              {
                text: "Ok",
                onPress: () => console.log("Ok Pressed"),
              },
            ])
          }
        ></Button>

        <Greet name="Jesus - Greet adlı fonksiyondan çağrılan kod satırı"></Greet>
        <Greet name="Christ - Greet adlı fonksiyondan çağrılan kod satırı"></Greet>

        <View style={styles.styleInheritenceBg}>
          <Text style={styles.styleInheritence}>
            Style Inheritence
            <Text style={styles.boldText}>{"\n"} Bold Text</Text>
          </Text>
        </View>
      </ScrollView>
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet" //only works on IOS
      >
        <View style={styles.modal}>
          <Text>Modal Content</Text>
          <Button
            onPress={() => setIsModalVisible(false)}
            title="Close"
            color={"yellow "}
          />
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 50,
  },
  title: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
  },
  text: {
    color: "black",
    marginVertical: 20,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "white",
  },
  image: {
    width: 250,
    height: 250,
    marginVertical: 20,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 100,
    backgroundColor: "red",
  },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 20,
  },
  styleInheritenceBg: {
    backgroundColor: "black",
    padding: 10,
    marginTop: 20,
  },
  styleInheritence: {
    color: "white",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  modal: {
    flex: 1,
    backgroundColor: "teal",
    padding: 60,
  },
});

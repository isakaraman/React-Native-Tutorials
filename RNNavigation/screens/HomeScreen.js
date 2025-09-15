import { Text, View, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation, route }) {
  //const navigation = useNavigation();
  return (
    <View style={styles.title}>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.text}>{route.params?.result}</Text>
      <Button
        title="Go To About"
        onPress={() => {
          navigation.navigate("About", {
            name: "Jesus",
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

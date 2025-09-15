import { Text, View, StyleSheet, Button } from "react-native";
import { useLayoutEffect } from "react";

export default function AboutScreen({ route, navigation }) {
  const { name } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);
  return (
    <View style={styles.title}>
      <Text style={styles.text}>About {name}</Text>
      <Button
        title="Update the name"
        onPress={() => {
          navigation.setParams({ name: "Jesus" });
        }}
      />
      <Button
        title="Go back with data"
        onPress={() =>
          navigation.navigate("Home", { result: "Data from About" })
        }
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

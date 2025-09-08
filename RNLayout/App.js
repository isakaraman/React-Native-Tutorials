import { StyleSheet, View } from "react-native";
import Box from "./components/box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box
        style={{
          backgroundColor: "lightblue",
          paddingVertical: 100,
          alignSelf: "flex-start",
        }}
      >
        Box 1
      </Box>
      <Box
        style={{
          backgroundColor: "lightgreen",
          alignSelf: "flex-end",
          flexBasis: 100,
        }}
      >
        Box 2
      </Box>
      <Box style={{ backgroundColor: "lightcoral", alignSelf: "center" }}>
        Box 3{" "}
      </Box>
      <Box style={{ backgroundColor: "lightpink", alignSelf: "stretch" }}>
        Box 4
      </Box>
      <Box
        style={{
          backgroundColor: "lightgray",
          alignSelf: "auto",
          flexShrink: 2,
          flexGrow: 1,
          position: "absolute",
        }}
      >
        Box 5
      </Box>
      <Box style={{ backgroundColor: "lightyellow" }}>Box 6</Box>
      <Box style={{ backgroundColor: "lightcyan", flex: 1 }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    height: 300,
    flexWrap: "wrap",
    flexDirection: "column",
    alignContent: "space-around",
    alignItems: "baseline",
    justifyContent: "space-evenly",
    rowGap: 20,
    columnGap: 40,
    gap: 20,

    marginTop: 50,
    marginBottom: 50,
    borderWidth: 6,
    borderColor: "red",
  },
});

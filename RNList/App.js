import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
  SectionList,
} from "react-native";
import pokemonList from "./data.json";
import groupedPokemonList from "./grouped-data.json";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map((pokemon) => {
          return (
            <View style={styles.card} key={pokemon.id}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      <View style={styles.scrollView}>
        {/* <FlatList
          data={pokemonList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card} key={item.id}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={<View style={{ height: 10 }} />}
          ListEmptyComponent={<Text>No Pokémon found</Text>}
          ListHeaderComponent={
            <Text style={styles.headerText}>Pokemon List</Text>
          }
          ListFooterComponent={
            <Text style={styles.footerText}>End of List</Text>
          }
        /> */}

        <SectionList
          sections={groupedPokemonList}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeaderText}>{section.type}</Text>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          SectionSeparatorComponent={() => <View style={{ height: 10 }} />}
        ></SectionList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 30,
  },
  headerText: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
  footerText: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 15,
  },
  sectionHeaderText: {
    backgroundColor: "#eee",
    fontSize: 24,
    fontWeight: "bold",
  },
});

import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

type Game = {
  id: string;
  title: string;
};

const games: Game[] = [
  { id: "1", title: "God of War" },
  { id: "2", title: "The Last of Us" },
  { id: "3", title: "GTA V" },
  { id: "4", title: "Minecraft" },
];

export default function ExploreScreen() {
  const renderGameCard = ({ item }: { item: Game }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={renderGameCard}
        contentContainerStyle={{ paddingLeft: 16 }} // ✅ corrigido aqui
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  card: {
    backgroundColor: "#222",
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 16,
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
});
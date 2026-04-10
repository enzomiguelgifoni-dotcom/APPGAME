import React from "react";
import { View, Text, FlatList, StyleSheet, ImageBackground } from "react-native";

type Game = {
  id: string;
  title: string;
  image: string;
};

const games: Game[] = [
  { id: "1", title: "God of War", image: "https://i.pinimg.com/736x/62/67/e9/6267e906163112870821d978e30a8437.jpg" },
  { id: "2", title: "The Last of Us", image: "https://i.pinimg.com/736x/04/5b/9e/045b9e505a900407008120be81d6d656.jpg" },
  { id: "3", title: "GTA V", image: "https://i.pinimg.com/736x/d6/aa/09/d6aa093c3694ac362c809c64c17edb99.jpg" },
  { id: "4", title: "Minecraft", image: "https://i.pinimg.com/736x/e5/7b/54/e57b54b6916bf1c603b9dfa7b4d072e6.jpg" },
    { id: "5", title: "Fortnite", image: "https://i.pinimg.com/736x/9f/ae/ef/9faeefc3dc65fc465a011d0da82d0621.jpg" },
    { id: "6", title: "Call of Duty", image: "https://i.pinimg.com/736x/71/f7/ed/71f7edde8705899702ec4d9f4660b0b3.jpg" },

];

export default function ExploreScreen() {
  const renderGameCard = ({ item }: { item: Game }) => {
    return (
      <ImageBackground source={{ uri: item.image }} style={styles.card}>
        <View style={styles.overlay}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={renderGameCard}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#09090A',
  },
  card: {
    width: 300,
    height: '100%',
    marginRight: 16,
    borderRadius: 10,
    overflow: 'hidden',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'Full Width',
  },
});
import React from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const games = [
    { id: 1, name: 'HORIZON', background_image: 'https://i.pinimg.com/736x/3f/8e/ea/3f8eeae2a0222ceb3529fb3feb04f372.jpg', rating: 4.5 },
    { id: 2, name: 'GOD OF WAR', background_image: 'https://i.pinimg.com/1200x/01/02/4b/01024bce985a3c7c0592bca206c8b087.jpg', rating: 4.2 },
    { id: 3, name: 'FARCRY 4', background_image: 'https://i.pinimg.com/736x/26/bd/15/26bd15c9ce7037967b2ca6a66310f4a0.jpg', rating: 4.8 },
    { id: 4, name: 'FORZA HORIZON 6', background_image: 'https://i.pinimg.com/1200x/d0/00/b6/d000b6da51108c40279ab161ac67aa01.jpg', rating: 4.0 },
    { id: 5, name: 'BATTELIFIELD', background_image: 'https://i.pinimg.com/1200x/07/6d/74/076d74db5bf28235d21fe9f7c15fc723.jpg', rating: 4.7 },
    { id: 6, name: 'RED DEAD REDEMPTION 2', background_image: 'https://i.pinimg.com/736x/ab/c9/85/abc985731dfb5e4874655b7f7ac74cef.jpg', rating: 4.3 },

  ];
  const renderGameCard = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => router.push({
        pathname: "/details",
        params: { name: item.name, image: item.background_image, rating: item.rating }
      })}
    >
      <ImageBackground source={{ uri: item.background_image }} style={styles.card}>
        <View style={styles.overlay}>
          <Text style={styles.cardTitle} numberOfLines={1}>{item.name}</Text>
        </View>
      </ImageBackground>
      <View style={styles.captionBox}>
        <Text style={styles.captionText}>COMPARAR</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.brand}>Game<Text style={{color: '#7159c1'}}>Catalog</Text></Text>
        </View>
        <Text style={styles.sectionTitle}>Lançamentos</Text>
        <FlatList
          data={games.slice(0, 4)}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderGameCard}
          contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}
        />
        <Text style={[styles.sectionTitle, {marginTop: 30}]}>Ação</Text>
        <FlatList
          data={games.slice(2, 6)}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item.id + "_acao")}
          renderItem={renderGameCard}
          contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}
        />
        <View style={{ marginBottom: 50 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#09090A' },
  center: { flex: 1, backgroundColor: '#09090A', justifyContent: 'center', alignItems: 'center' },
  header: { padding: 25, paddingTop: 50, alignItems: 'center' },
  brand: { fontSize: 28, fontWeight: 'bold', color: '#FFF', fontFamily: 'Full Width' },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: '#FFF', marginLeft: 20, marginBottom: 15, fontFamily: 'Full Width' },
  card: { width: 380, height: 320, marginRight: 32, borderRadius: 10, overflow: 'hidden' },
  overlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.45)', justifyContent: 'center', alignItems: 'center' },
  cardTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center', fontFamily: 'Full Width', paddingHorizontal: 12 },
  captionBox: { backgroundColor: '#121214', paddingVertical: 10, alignItems: 'center' },
  captionText: { color: '#fff', fontSize: 16, fontWeight: 'bold', letterSpacing: 1, fontFamily: 'Full Width' },
});
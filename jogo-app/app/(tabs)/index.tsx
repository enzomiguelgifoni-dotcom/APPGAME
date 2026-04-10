import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const API_KEY = 'TU_CHAVE_AQUI'; 

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=20`);
        const data = await response.json();
        setGames(data.results || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchGames();
  }, []);

  const renderGameCard = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => router.push({
        pathname: "/details",
        params: { name: item.name, image: item.background_image, rating: item.rating }
      })}
    >
      <View style={styles.badge}><Text style={styles.badgeText}>6% OFF</Text></View>
      <Image source={{ uri: item.background_image }} style={styles.cardImg} />
      <View style={styles.cardContent}>
        <Text style={styles.platform}>PS5 / XBOX / PC</Text>
        <Text style={styles.gameTitle} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.pricePix}>R$ 122,11 <Text style={{fontSize: 10}}>no pix</Text></Text>
        <TouchableOpacity style={styles.btnBuy}><Text style={styles.btnText}>Ver mais</Text></TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  if (loading) return <View style={styles.center}><ActivityIndicator size="large" color="#7159c1" /></View>;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.brand}>Game<Text style={{color: '#7159c1'}}>Catalog</Text></Text>
        </View>
        <Text style={styles.sectionTitle}>Lançamentos</Text>
        <FlatList
          data={games.slice(0, 10)}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderGameCard}
          contentContainerStyle={{ paddingLeft: 20 }}
        />
        <Text style={[styles.sectionTitle, {marginTop: 30}]}>Destaques</Text>
        <FlatList
          data={games.slice(10, 20)}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item.id + "_dest")}
          renderItem={renderGameCard}
          contentContainerStyle={{ paddingLeft: 20 }}
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
  brand: { fontSize: 28, fontWeight: 'bold', color: '#FFF' },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: '#FFF', marginLeft: 20, marginBottom: 15 },
  card: { width: 200, marginRight: 15, backgroundColor: '#FFF', borderRadius: 8, overflow: 'hidden' },
  badge: { position: 'absolute', top: 10, left: 10, backgroundColor: '#000', borderRadius: 20, paddingHorizontal: 8, paddingVertical: 4, zIndex: 1 },
  badgeText: { color: '#FFF', fontSize: 10, fontWeight: 'bold' },
  cardImg: { width: '100%', height: 240 },
  cardContent: { padding: 12, alignItems: 'center' },
  platform: { fontSize: 10, color: '#666' },
  gameTitle: { color: '#333', fontSize: 15, fontWeight: 'bold', marginVertical: 5 },
  pricePix: { color: '#f70000', fontSize: 18, fontWeight: 'bold' },
  btnBuy: { backgroundColor: '#ff0000', width: '100%', padding: 8, borderRadius: 4, marginTop: 10, alignItems: 'center' },
  btnText: { color: '#FFF', fontWeight: 'bold', fontSize: 12 }
});
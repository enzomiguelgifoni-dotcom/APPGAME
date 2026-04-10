// src/components/GameCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function GameCard({ game }: { game: any }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: game.background_image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{game.name}</Text>
        <Text style={styles.rating}>⭐ {game.rating}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 12, marginBottom: 20, overflow: 'hidden', elevation: 3 },
  image: { width: '100%', height: 180 },
  info: { padding: 12 },
  title: { fontSize: 18, fontWeight: 'bold' },
  rating: { color: '#f1c40f', marginTop: 4 }
});
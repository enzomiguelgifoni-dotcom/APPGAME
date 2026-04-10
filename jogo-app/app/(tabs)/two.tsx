import { StyleSheet, Text, View } from 'react-native';

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Favoritos</Text>
      <View style={styles.emptyBox}>
        <Text style={styles.icon}>⭐</Text>
        <Text style={styles.msg}>Sua lista está vazia.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#09090A', padding: 25, paddingTop: 60 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#FFF' },
  emptyBox: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  icon: { fontSize: 50, marginBottom: 10 },
  msg: { color: '#888', fontSize: 16 }
});
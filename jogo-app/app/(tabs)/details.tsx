import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function DetailsScreen() {
  const { name, image, price } = useLocalSearchParams();
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
        <Text style={{color: '#FFF', fontSize: 18}}>← Voltar</Text>
      </TouchableOpacity>

      <Image source={{ uri: image as string }} style={styles.mainImg} />
      
      <View style={styles.content}>
        <Text style={styles.title}>{name} - PS5</Text>
        <Text style={styles.tag}>Produto com Frete Grátis</Text>
        
        <View style={styles.priceBox}>
          <Text style={styles.pricePix}>R$ 2799,99 {price} <Text style={{fontSize: 16}}>no pix</Text></Text>
          <Text style={styles.discount}>com 6% de desconto</Text>
          <Text style={styles.priceOld}>A partir de R$ 129,90</Text>
          <Text style={styles.installments}>até 5x de R$ 25,98 sem juros</Text>
        </View>

        <TouchableOpacity style={styles.btnMain}>
          <Text style={styles.btnText}>Comprar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.btnWhats}
          onPress={() => Linking.openURL('https://wa.me/5511999999999')}
        >
          <Text style={styles.btnWhatsText}>Comprar pelo whatsapp 💬</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#09090A' },
  backBtn: { padding: 20, paddingTop: 50 },
  mainImg: { width: '100%', height: 450, resizeMode: 'contain', backgroundColor: '#000' },
  content: { padding: 25 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#FFF' },
  tag: { color: '#ffffff', fontSize: 14, marginTop: 5, fontWeight: '500' },
  priceBox: { marginVertical: 30 },
  pricePix: { color: '#17db32', fontSize: 38, fontWeight: 'bold' },
  discount: { color: '#ffffff', fontSize: 16, fontWeight: '500' },
  priceOld: { color: '#888', textDecorationLine: 'line-through', marginTop: 10, fontSize: 16 },
  installments: { color: '#FFF', fontSize: 16, marginTop: 5 },
  btnMain: { backgroundColor: '#ff0000', padding: 18, borderRadius: 5, alignItems: 'center' },
  btnText: { color: '#FFF', fontWeight: 'bold', fontSize: 20, textTransform: 'uppercase' },
  btnWhats: { borderWidth: 1, borderColor: '#FFF', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 15 },
  btnWhatsText: { color: '#FFF', fontWeight: 'bold' }
});
import { View, Text, Button, Image } from 'react-native';

import styles from './Estilo';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>Bem-vindo!</Text>

      <Text style={styles.label}>Você entrou no aplicativo.</Text>

      <View style={styles.botao}>
        <Button
          title="Sair"
          onPress={() => navigation.navigate('Login')}
          color="#007AFF"
        />
      </View>
    </View>
  );
}

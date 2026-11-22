import { View, Text, TextInput, Button, Image } from 'react-native';

import styles from './Estilo';

export default function Recuperar({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>Recuperar senha</Text>

      <Text style={styles.label}>Digite o e-mail</Text>

      <TextInput
        placeholder="fulano@hotmail.com"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.botao}>
        <Button
          title="Enviar"
          onPress={() => navigation.navigate('Login')}
          color="#007AFF"
        />
      </View>

      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        Voltar para o login
      </Text>
    </View>
  );
}

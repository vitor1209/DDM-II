import { View, Text, TextInput, Button, Image } from 'react-native';

import styles from './Estilo';

export default function Cadastro({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>Cadastro</Text>

      <Text style={styles.label}>Nome</Text>

      <TextInput placeholder="Digite seu nome" style={styles.input} />

      <Text style={styles.label}>Digite o e-mail</Text>

      <TextInput
        placeholder="fulano@hotmail.com"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha</Text>

      <TextInput
        placeholder="Digite sua senha"
        style={styles.input}
        secureTextEntry={true}
      />

      <View style={styles.botao}>
        <Button
          title="Cadastrar"
          onPress={() => navigation.navigate('Login')}
          color="#007AFF"
        />
      </View>

      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        Já tenho conta
      </Text>
    </View>
  );
}

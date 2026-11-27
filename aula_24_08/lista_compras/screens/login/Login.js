import { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert } from 'react-native';

import styles from './Estilo';
import { verificarLogin } from './Funcoes';

// Tela 1: usa useState para guardar usuário e senha digitados
export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function fazerLogin() {
    if (verificarLogin(usuario, senha)) {
      setSenha('');
      navigation.navigate('Adicionar');
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos!');
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>Lista de Compras</Text>

      <Text style={styles.label}>Usuário</Text>

      <TextInput
        placeholder="Digite seu usuário (admin)"
        style={styles.input}
        autoCapitalize="none"
        value={usuario}
        onChangeText={setUsuario}
      />

      <Text style={styles.label}>Senha</Text>

      <TextInput
        placeholder="Digite sua senha (admin)"
        style={styles.input}
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      <View style={styles.botao}>
        <Button title="Entrar" onPress={fazerLogin} color="#007AFF" />
      </View>
    </View>
  );
}

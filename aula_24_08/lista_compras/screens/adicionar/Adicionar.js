import { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

import styles from './Estilo';
import { adicionarItem } from './Funcoes';

// Tela 2: usa useState para o campo de texto e para a mensagem de confirmação
export default function Adicionar({ navigation, itens, setItens }) {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  function salvar() {
    const novaLista = adicionarItem(itens, nome);

    if (novaLista === null) {
      Alert.alert('Atenção', 'Digite o nome do item!');
      return;
    }

    setItens(novaLista);
    setMensagem(`"${nome.trim()}" adicionado!`);
    setNome('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Adicionar item</Text>

      <Text style={styles.label}>Nome do item</Text>

      <TextInput
        placeholder="Ex.: Pão"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        onSubmitEditing={salvar}
      />

      <View style={styles.botao}>
        <Button title="Adicionar" onPress={salvar} color="#28A745" />
      </View>

      {mensagem !== '' && <Text style={styles.mensagem}>{mensagem}</Text>}

      <Text style={styles.contador}>Itens na lista: {itens.length}</Text>

      <View style={styles.botao}>
        <Button
          title="Ver lista"
          onPress={() => navigation.navigate('Lista')}
          color="#007AFF"
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Sair"
          onPress={() => navigation.navigate('Login')}
          color="#888"
        />
      </View>
    </View>
  );
}

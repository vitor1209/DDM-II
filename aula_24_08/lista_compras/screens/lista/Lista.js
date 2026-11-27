import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';

import styles from './Estilo';
import { alternarComprado, removerItem } from './Funcoes';

// Tela 3: usa FlatList para listar os itens
export default function Lista({ navigation, itens, setItens }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minha lista</Text>

      <Text style={styles.subtitulo}>
        Toque no item para marcar como comprado.
      </Text>

      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhum item na lista.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableOpacity
              style={styles.itemTexto}
              onPress={() => setItens(alternarComprado(itens, item.id))}
            >
              <Text
                style={[styles.nome, item.comprado && styles.nomeComprado]}
              >
                {item.comprado ? '✓ ' : '○ '}
                {item.nome}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setItens(removerItem(itens, item.id))}
            >
              <Text style={styles.remover}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.botao}>
        <Button
          title="Adicionar mais"
          onPress={() => navigation.navigate('Adicionar')}
          color="#007AFF"
        />
      </View>
    </View>
  );
}

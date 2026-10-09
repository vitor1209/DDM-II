import { ScrollView, Text, TextInput, View, StyleSheet , Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}> Sportfyre </Text>
        <Text style={styles.subtitulo}> musica em todo momento </Text>

        <TextInput placeholder='busque suas musicas..' /> 

        <View style={styles.cardDestaque}>
           <Text style={styles.tituloCard}> destaque do dia </Text>
           <View>
              <Text style={styles.subtitulo}> Vibrações tops </Text>
              <Text style={styles.subtitulo}> fila p apertar ummm  </Text>

              <Button style={styles.botao} title='ESCUTE AGORA' />
           </View>
        </View>

         <View >
           <Text> suas musicas </Text>
           <View style={styles.secao}>
              <Text style={styles.nomeMusica}> card musica </Text>
              <Text style={styles.artista}> sua musica vai ficar aaq em...  </Text>
           </View>

           <View style={styles.secao}>
              <Text style={styles.nomeMusica}> card musica </Text>
              <Text style={styles.artista}> sua musica vai ficar aaq em...  </Text>
           </View>

           <View style={styles.secao}>
              <Text style={styles.nomeMusica}> card musica </Text>
              <Text style={styles.artista}> sua musica vai ficar aaq em...  </Text>
           </View>
        </View>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000"
  },
  
  titulo: {
    color: "#fff",
    fontSize: 30,
    fontWeight:'bold'
  },

  tituloCard: {
    color: "#fff",
    fontSize: 20,
    fontWeight:'bold'
  },

  subtitulo: {
    color: "#918e8e",
    fontSize: 15,
    letterSpacing: 1.5,
    lineHeight: 20,
  },

  cardDestaque: {
    backgroundColor:  "#54356d",
    borderRadius: 15,
    padding: 20
  },

  secao: {
    backgroundColor: '#282828',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  nomeMusica: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  artista: {
    color: '#B3B3B3',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 12,
  },

});
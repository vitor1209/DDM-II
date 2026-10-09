import {
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>MusicWave 🎧</Text>
        <Text style={styles.subtitulo}>
          Sua música, seu momento.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Buscar músicas..."
          placeholderTextColor="#999"
        />

        <Text style={styles.secao}>Destaque do dia</Text>

        <View style={styles.destaque}>
          <Text style={styles.emoji}>🎵</Text>
          <Text style={styles.nomeMusica}>
            Vibrações Positivas
          </Text>
          <Text style={styles.artista}>
            Playlist para relaxar
          </Text>
          <Button title="Ouvir agora" color="#7C4DFF" />
        </View>

        <Text style={styles.secao}>Suas playlists</Text>

        <View style={styles.card}>
          <Text style={styles.emoji}>🌅</Text>
          <View style={styles.info}>
            <Text style={styles.nomeMusica}>Good Vibes</Text>
            <Text style={styles.artista}>
              20 músicas • Relaxar
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.emoji}>🔥</Text>
          <View style={styles.info}>
            <Text style={styles.nomeMusica}>Só Hits</Text>
            <Text style={styles.artista}>
              35 músicas • Agitação
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.emoji}>🌙</Text>
          <View style={styles.info}>
            <Text style={styles.nomeMusica}>Modo Noturno</Text>
            <Text style={styles.artista}>
              18 músicas • Tranquilidade
            </Text>
          </View>
        </View>

        <Text style={styles.rodape}>
          Feito para quem ama música 🎶
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    paddingTop: 50,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },

  subtitulo: {
    color: '#B3B3B3',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 25,
  },

  input: {
    backgroundColor: '#282828',
    color: '#FFFFFF',
    padding: 14,
    borderRadius: 10,
    marginBottom: 25,
  },

  secao: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 10,
  },

  destaque: {
    backgroundColor: '#242038',
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
  },

  emoji: {
    fontSize: 35,
    marginRight: 15,
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

  card: {
    backgroundColor: '#282828',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  info: {
    flex: 1,
  },

  rodape: {
    color: '#888888',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 20,
  },
});
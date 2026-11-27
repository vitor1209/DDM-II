import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 60,
    backgroundColor: '#f5f5f5',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },

  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },

  itemTexto: {
    flex: 1,
  },

  nome: {
    fontSize: 18,
    color: '#333',
  },

  nomeComprado: {
    textDecorationLine: 'line-through',
    color: '#999',
  },

  remover: {
    color: '#DC3545',
    fontWeight: 'bold',
  },

  vazio: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
    color: '#888',
  },

  botao: {
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default styles;

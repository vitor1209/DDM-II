import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#f5f5f5',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },

  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },

  botao: {
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },

  mensagem: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 16,
    color: '#28A745',
  },

  contador: {
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
  },
});

export default styles;

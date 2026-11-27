import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login/Login';
import Adicionar from './screens/adicionar/Adicionar';
import Lista from './screens/lista/Lista';

const Stack = createNativeStackNavigator();

export default function App() {
  // Estado compartilhado entre as telas Adicionar e Lista
  const [itens, setItens] = useState([
    { id: '1', nome: 'Arroz', comprado: false },
    { id: '2', nome: 'Feijão', comprado: false },
    { id: '3', nome: 'Leite', comprado: true },
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Adicionar">
          {(props) => (
            <Adicionar {...props} itens={itens} setItens={setItens} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Lista">
          {(props) => <Lista {...props} itens={itens} setItens={setItens} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

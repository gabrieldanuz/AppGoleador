import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Menu from '../pages/Menu';
import CadastroJogador from '../pages/CadastroJogador';

const Stack = createNativeStackNavigator();

export default function Routes(){
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Menu"
      component={Menu}
      options={{headerShown: false}}
      />
      <Stack.Screen 
      name="CadastroJogador"
      component={CadastroJogador}
      options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}


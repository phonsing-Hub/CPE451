import { React , createContext , useContext , useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';

import Home from '../src/Components/Home';
import Security from '../src/Components/Security';
import Chat from '../src/Components/Chat';
import Bills from '../src/Components/Bills';
import Bells from '../src/Components/Bells';
import Contract from '../src/Components/Contract';
import Service from '../src/Components/Service';
import Pngtree from '../src/Components/Pngtree';

const Stack = createNativeStackNavigator();
const AuthenticatedUserContext = createContext({});

export default MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false,}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="security" component={Security} />
      <Stack.Screen name='chat' component={Chat}/>
      <Stack.Screen name='bills' component={Bills}/>
      <Stack.Screen name='bells' component={Bells}/>
      <Stack.Screen name='contract' component={Contract}/>
      <Stack.Screen name='service' component={Service}/>
      <Stack.Screen name='pngtree' component={Pngtree}/>
    </Stack.Navigator>
  );
}

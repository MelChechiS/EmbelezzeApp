import { StatusBar } from 'expo-status-bar';
import { SafeAreaViewBase} from 'react-native';
import Carrinho from '../EmbelezzeApp/EmbelezzeApp/pages/CarrinhodeBeleza';


export default function App() {
  return (
    <SafeAreaViewBase>
    <StatusBar/>
        <Carrinho/>
        <StatusBar/>
    </SafeAreaViewBase>
  
  );
}


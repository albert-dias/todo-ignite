import { Home } from './src/screens/Home';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular, 
    Inter_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Home />
  );
}


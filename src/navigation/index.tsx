import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../features/home/screens/HomeScreen';
import { ThemeProvider } from '../theme/ThemeProvider';
import homeOptions from './options/homeOptions';
import LoginScreen from '@/features/auth/screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={homeOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
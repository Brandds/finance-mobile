import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../features/home/screens/HomeScreen';
import { ThemeProvider } from '../theme/ThemeProvider';
import { Text, View } from 'react-native';
import homeOptions from './options/homeOptions';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={homeOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
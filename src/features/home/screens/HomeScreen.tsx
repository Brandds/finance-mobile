import { View, Text, StyleSheet, TouchableOpacity, SafeAreaViewBase } from 'react-native';
import { useTheme } from '../../../theme/useTheme';
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from '@/components';
import { useLogout } from '@/features/auth/hooks/useLogout';

export default function Home() {
  const { handleLogout } = useLogout();

  return (
    <SafeAreaView>
      <Text>Tesxt</Text>
      <Button title="Sair" onPress={handleLogout} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
})

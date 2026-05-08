import { View, Text, StyleSheet, TouchableOpacity, SafeAreaViewBase } from 'react-native';
import { useTheme } from '../../../theme/useTheme';
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from '@/components';

export default function Home() {
  const theme = useTheme();

  const handleAddTransaction = () => {
    // Lógica para adicionar uma nova transação
    alert('Adicionar Transação');
  }

  return (
    <SafeAreaView>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
})

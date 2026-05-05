import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../theme/useTheme';
import { Button } from '@/components';

export default function Home() {
  const theme = useTheme();

  const handleAddTransaction = () => {
    // Lógica para adicionar uma nova transação
    alert('Adicionar Transação');
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <Text
        style={[
          theme.typography.h1,
          { color: theme.colors.text },
        ]}
      >
        Saldo Total
      </Text>

      <Text
        style={[
          theme.typography.display,
          { color: theme.colors.primary, marginTop: theme.spacing.sm },
        ]}
      >
        R$ 2.450,00
      </Text>
      <Button title="Adicionar Transação" variant="secondary" onPress={handleAddTransaction} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
})

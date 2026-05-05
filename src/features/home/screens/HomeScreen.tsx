import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../theme/useTheme';

export default function Home() {
  const theme = useTheme()

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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
})

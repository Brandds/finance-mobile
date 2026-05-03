import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { homeStyle } from './homeStyle';

export default function HomeScreen() {
  return (
    <View style={homeStyle.container}>
      <Text style={homeStyle.title}>Olá, Brandon 👋</Text>
      <Text style={homeStyle.subtitle}>Resumo Financeiro</Text>

      <View style={homeStyle.card}>
        <Text style={homeStyle.label}>Gasto do mês</Text>
        <Text style={homeStyle.value}>R$ 1.245,90</Text>
      </View>

      <View style={homeStyle.section}>
        <Text style={homeStyle.sectionTitle}>Últimos gastos</Text>

        <Text style={homeStyle.item}>🍔 iFood - R$ 42,00</Text>
        <Text style={homeStyle.item}>⛽ Posto - R$ 120,00</Text>
        <Text style={homeStyle.item}>☕ Padaria - R$ 14,00</Text>
      </View>

      <TouchableOpacity style={homeStyle.button}>
        <Text style={homeStyle.buttonText}>+ Novo Gasto</Text>
      </TouchableOpacity>
    </View>
  );
}

import { Theme } from '@/theme/theme';
import { StyleSheet } from 'react-native';

export const styles = (theme: Theme) =>
  StyleSheet.create({
    content: {
      flex: 1,
      gap: 24,
      flexDirection: 'column',
      justifyContent: 'center',
    },

    formCard: {
      padding: 16,
      gap: 20,
    },

    passwordHint: {
      marginTop: 8,
    },
  });
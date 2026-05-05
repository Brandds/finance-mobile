import React from 'react'
import { View, TextInput, Text } from 'react-native'
import { useTheme } from '@/theme/useTheme'

type Props = {
  label?: string
  value: string
  onChange: (text: string) => void
  error?: string
}

export const Input = ({ label, value, onChange, error }: Props) => {
  const theme = useTheme()

  return (
    <View style={{ marginBottom: theme.spacing.md }}>
      {label && (
        <Text
          style={{
            ...theme.typography.labelSm,
            color: theme.colors.textSecondary,
            marginBottom: theme.spacing.xs,
          }}
        >
          {label}
        </Text>
      )}

      <TextInput
        value={value}
        onChangeText={onChange}
        style={{
          backgroundColor: theme.colors.surfaceContainer,
          borderRadius: theme.radius.md,
          padding: theme.spacing.md,
          borderWidth: 1,
          borderColor: error
            ? theme.colors.error
            : theme.colors.border,
          color: theme.colors.text,
        }}
      />

      {error && (
        <Text
          style={{
            color: theme.colors.error,
            fontSize: 12,
            marginTop: 4,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  )
}
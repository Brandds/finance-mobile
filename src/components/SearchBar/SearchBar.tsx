import React from 'react'
import { View, TextInput } from 'react-native'
import { useTheme } from '@/theme/useTheme'

type Props = {
  value: string
  onChange: (text: string) => void
  placeholder?: string
}

export const SearchBar = ({ value, onChange, placeholder }: Props) => {
  const theme = useTheme()

  return (
    <View
      style={{
        backgroundColor: theme.colors.surfaceContainer,
        borderRadius: theme.radius.md,
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.sm,
      }}
    >
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textSecondary}
        style={{
          color: theme.colors.text,
          fontSize: 14,
        }}
      />
    </View>
  )
}
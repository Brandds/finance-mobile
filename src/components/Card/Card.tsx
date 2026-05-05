import React from 'react'
import { View } from 'react-native'
import { useTheme } from '@/theme/useTheme'

export const Card = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme()

  return (
    <View
      style={{
        backgroundColor: '#fff',
        padding: theme.spacing.md,
        borderRadius: theme.radius.lg,
        borderWidth: 0.5,
        borderColor: theme.colors.border,
        ...theme.shadows.level1,
      }}
    >
      {children}
    </View>
  )
}
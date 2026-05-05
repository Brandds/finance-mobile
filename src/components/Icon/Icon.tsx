import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from '@/theme/useTheme'

type Props = {
  name: keyof typeof MaterialIcons.glyphMap
  size?: number
  color?: string
}

export const Icon = ({ name, size = 24, color }: Props) => {
  const theme = useTheme()

  return (
    <MaterialIcons
      name={name}
      size={size}
      color={color || theme.colors.textSecondary}
    />
  )
}
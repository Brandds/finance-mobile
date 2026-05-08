import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from '@/theme/useTheme'
import { View } from 'react-native'

type Props = {
  name: keyof typeof MaterialIcons.glyphMap
  size?: number
  color?: string
  styleView?: object
}

export const Icon = ({ name, size = 24, color, styleView }: Props) => {
  const theme = useTheme()

  return (
    <View style={styleView}>
      <MaterialIcons
        name={name}
        size={size}
        color={color || theme.colors.textSecondary}
      />
    </View>
  )
}
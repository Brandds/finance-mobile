import React from 'react'
import { View } from 'react-native'
import { useTheme } from '@/theme/useTheme'

export const Card = ({ children, styleCard }: { children: React.ReactNode; styleCard: object }) => {
  const theme = useTheme()

  return (
    <View
      style={styleCard}
    >
      {children}
    </View>
  )
}
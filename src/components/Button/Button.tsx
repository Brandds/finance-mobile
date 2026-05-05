import React from 'react'
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import { useTheme } from '@/theme/useTheme'
import { propsButton } from './types'


type Props = propsButton

export const Button = ({
  title,
  onPress,
  variant = 'primary',
  loading = false,
}: Props) => {
  const theme = useTheme()

  const getBackground = () => {
    switch (variant) {
      case 'secondary':
        return 'transparent'
      case 'ghost':
        return 'transparent'
      default:
        return theme.colors.primary
    }
  }

  const getBorder = () => {
    if (variant === 'secondary') {
      return {
        borderWidth: 1,
        borderColor: theme.colors.primary,
      }
    }
    return {}
  }

  const getTextColor = () => {
    switch (variant) {
      case 'primary':
        return theme.colors.onPrimary
      default:
        return theme.colors.primary
    }
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: getBackground(),
        padding: theme.spacing.md,
        borderRadius: theme.radius.lg,
        alignItems: 'center',
        justifyContent: 'center',
        ...getBorder(),
      }}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <Text
          style={{
            color: getTextColor(),
            fontWeight: '600',
          }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
}
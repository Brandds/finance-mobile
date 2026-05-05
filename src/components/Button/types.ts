type Variant = 'primary' | 'secondary' | 'ghost'

export type propsButton = {
  title: string
  onPress?: () => void
  variant?: Variant
  loading?: boolean
}
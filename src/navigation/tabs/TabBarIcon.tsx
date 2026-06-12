import { Icon } from '@/components';
import { useTheme } from '@/theme/ThemeProvider';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  name: keyof typeof MaterialIcons.glyphMap;
  color: string;
  size?: number;
};

export function TabBarIcon({
  name,
  color,
  size = 24,
}: Props) {
  const theme = useTheme();
  const colorCustom = color || theme.colors.onSecondary
  return (
    <Icon
      name={name}
      color={colorCustom}
      size={size}
    />
  );
}
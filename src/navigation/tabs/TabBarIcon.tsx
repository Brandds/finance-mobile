import MaterialIcons
from '@expo/vector-icons/MaterialIcons';

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
  return (
    <MaterialIcons
      name={name}
      color={color}
      size={size}
    />
  );
}
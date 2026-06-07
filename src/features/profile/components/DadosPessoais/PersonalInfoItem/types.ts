import { MaterialIcons } from "@expo/vector-icons";

export interface PersonalInfoItemProps {
  label: string;
  value: string;
  icon: keyof typeof MaterialIcons.glyphMap;
}
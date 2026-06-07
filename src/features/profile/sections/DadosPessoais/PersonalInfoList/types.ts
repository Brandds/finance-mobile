import {
  MaterialIcons,
} from "@expo/vector-icons";

export interface PersonalInfo {
  label: string;
  value: string;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export interface PersonalInfoListProps {
  items: PersonalInfo[];
}
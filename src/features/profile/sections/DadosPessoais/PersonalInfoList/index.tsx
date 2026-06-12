import {
  PersonalInfoListProps,
} from "./types";

import { styles as stylesPersonalInfoList } from "./styles";
import { Card } from "@/components";
import PersonalInfoItem from "@/features/profile/components/DadosPessoais/PersonalInfoItem";
import { useTheme } from "@/theme/ThemeProvider";

export default function PersonalInfoList({
  items,
}: PersonalInfoListProps) {
  const theme = useTheme();
  const styles = stylesPersonalInfoList(theme);
  return (
    <Card style={styles.card}>
      {items.map((item) => (
        <PersonalInfoItem
          key={item.label}
          label={item.label}
          value={item.value}
          icon={item.icon}
        />
      ))}
    </Card>
  );
}
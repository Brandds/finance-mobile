import {
  PersonalInfoListProps,
} from "./types";

import { styles } from "./styles";
import { Card } from "@/components";
import PersonalInfoItem from "@/features/profile/components/DadosPessoais/PersonalInfoItem";

export default function PersonalInfoList({
  items,
}: PersonalInfoListProps) {
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
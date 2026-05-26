import { MaterialIcons } from "@expo/vector-icons";

import SummaryCard from "@/components/SummaryCard";
import { tokens } from "@/theme/tokens";

export default function NotificationsSummary() {
  return (
    <SummaryCard
      subTitle="Você possui 2 notificações não lidas"
      info="Atualizado agora"
    >
      <MaterialIcons
        name="notifications-active"
        size={18}
        color={tokens.colors.onPrimary}
      />
    </SummaryCard>
  );
}
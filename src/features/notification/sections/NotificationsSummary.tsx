
import { Icon } from "@/components";
import SummaryCard from "@/components/SummaryCard";
import { useTheme } from "@/theme/ThemeProvider";

export default function NotificationsSummary() {
  const theme = useTheme();
  return (
    <SummaryCard
      subTitle="Você possui 2 notificações não lidas"
      info="Atualizado agora"
    >
      <Icon
        name="notifications-active"
        size={18}
        color={theme.colors.onPrimary}
      />
    </SummaryCard>
  );
}
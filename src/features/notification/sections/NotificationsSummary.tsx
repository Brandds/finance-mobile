
import { Icon } from "@/components";
import SummaryCard from "@/components/SummaryCard";
import { useTheme } from "@/theme/ThemeProvider";

export default function NotificationsSummary({ count }: { count: number }) {
  const theme = useTheme();
  return (
    <SummaryCard
      subTitle={`Você possui ${count} ${count === 1 ? "notificação não lida" : "notificações não lidas"}`}
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

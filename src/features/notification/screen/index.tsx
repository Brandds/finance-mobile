import { ScrollView, View, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Screen from "@/components/Screen/Screen";
import Typography from "@/components/Typography/Typography";
import SummaryCard from "@/components/SummaryCard";

import NotificationCard from "../sections/NotificationCard";
import { styles } from "../styles";
import NotificationSectionHeader from "../sections/NotificationSectionHeader";

export default function NotificationsScreen() {
  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <SummaryCard
          title="Notificações"
          subTitle="Você possui 2 notificações não lidas"
          info="Atualizado agora"
        >
          <MaterialIcons
            name="notifications-active"
            size={18}
            color="#FFFFFF"
          />
        </SummaryCard>

          <NotificationSectionHeader title="Hoje" />

          <NotificationCard
            title="Alerta de Limite"
            description='Você atingiu 90% do orçamento de "Lazer".'
            time="2h atrás"
            icon="warning"
            unread
            iconBackground="#FEE2E2"
            iconColor="#EF4444"
          />

          <NotificationCard
            title="Dica de Economia"
            description="Você gastou menos utilizando o cartão X."
            time="5h atrás"
            icon="lightbulb"
            unread
            iconBackground="#CCFBF1"
            iconColor="#14B8A6"
          />

          <NotificationSectionHeader title="Ontem" />

          <NotificationCard
            title="Segurança"
            description="Novo login detectado em Chrome."
            time="Ontem, 14:30"
            icon="shield"
            iconBackground="#E0F2FE"
            iconColor="#0EA5E9"
          />

          <NotificationCard
            title="Meta Alcançada"
            description="Você concluiu sua reserva de emergência."
            time="Ontem, 09:15"
            icon="emoji-events"
            iconBackground="#F1F5F9"
            iconColor="#475569"
          />
      </ScrollView>
    </Screen>
  );
}
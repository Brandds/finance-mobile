import { ScrollView } from "react-native";

import Screen from "@/components/Screen/Screen";


import NotificationSection from "../sections/NotificationSection";
import NotificationsSummary from "../sections/NotificationsSummary";

import { styles } from "../styles";
import { notifications } from "../mocks/notifications";
import AppHeader from "@/components/AppHeader";

export default function NotificationsScreen() {
  return (
    <Screen>
      <AppHeader title="Notificações" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <NotificationsSummary />

        {notifications.map((section) => (
          <NotificationSection
            key={section.section}
            title={section.section}
            notifications={section.data}
          />
        ))}
      </ScrollView>
    </Screen>
  );
}
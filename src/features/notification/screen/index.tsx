import Screen from "@/components/Screen/Screen";

import NotificationSection from "../sections/NotificationSection";
import NotificationsSummary from "../sections/NotificationsSummary";

import { notifications } from "../mocks/notifications";
import { titleScreen } from "@/constants/titleScreen";

export default function NotificationsScreen() {
  return (
    <Screen
      scrollable
      headerTitle={titleScreen.notifications}
      showBackButton
    >
      <NotificationsSummary />

      {notifications.map((section) => (
        <NotificationSection
          key={section.section}
          title={section.section}
          notifications={section.data}
        />
      ))}
    </Screen>
  );
}
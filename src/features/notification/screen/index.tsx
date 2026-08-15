import Screen from "@/components/Screen/Screen";

import NotificationSection from "../sections/NotificationSection";
import NotificationsSummary from "../sections/NotificationsSummary";

import { notifications } from "../mocks/notifications";
import { titleScreen } from "@/constants/titleScreen";
import { View } from "react-native";
import { useEffect, useState } from "react";
import { SkeletonBlock, SkeletonExpenseList, SkeletonSummaryCard } from "@/components/Skeleton";

export default function NotificationsScreen() {
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  if (!loading) {
    return (
      <Screen
        scrollable
        headerTitle={titleScreen.NOTIFICACOES}
        showBackButton
      >
        <NotificationsSummary/>

        <View style={{gap:15}}>

          {notifications.map((section) => (
            <NotificationSection
              key={section.section}
              title={section.section}
              notifications={section.data}
            />
          ))}
          
        </View>
      </Screen>
    );
  }
  return (
    <Screen
      scrollable
      headerTitle={titleScreen.NOTIFICACOES}
      showBackButton
    >
      <View style={{gap:15, marginBottom: 25, marginTop: 20}}>
        <SkeletonBlock height={170} width="100%" borderRadius={20}/>
      </View>

      <View style={{gap:15}}>
        <SkeletonBlock height={100} width="100%" borderRadius={20}/>
        <SkeletonBlock height={100} width="100%" borderRadius={20}/>
        <SkeletonBlock height={100} width="100%" borderRadius={20}/>
      </View>
    </Screen> 
  );
}
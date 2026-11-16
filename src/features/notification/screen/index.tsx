import { FlatList, View } from "react-native";
import Screen from "@/components/Screen/Screen";
import { Button } from "@/components";
import Typography from "@/components/Typography/Typography";
import { SkeletonBlock } from "@/components/Skeleton";
import { titleScreen } from "@/constants/titleScreen";
import { useTheme } from "@/theme/ThemeProvider";
import NotificationCard from "../sections/NotificationCard";
import NotificationsSummary from "../sections/NotificationsSummary";
import { useNotifications } from "../hooks/useNotifications";

export default function NotificationsScreen() {
  const theme = useTheme();
  const state = useNotifications();
  return (
    <Screen headerTitle={titleScreen.NOTIFICACOES} showBackButton>
      {state.loading ? (
        <View style={{ gap: theme.spacing.md }}>
          <SkeletonBlock height={170} width="100%" />
          <SkeletonBlock height={100} width="100%" />
          <SkeletonBlock height={100} width="100%" />
        </View>
      ) : (
        <FlatList
          data={state.items}
          keyExtractor={item => String(item.id)}
          refreshing={state.busy}
          onRefresh={state.refresh}
          contentContainerStyle={{ gap: theme.spacing.md, paddingBottom: theme.spacing.lg }}
          ListHeaderComponent={
            <View style={{ gap: theme.spacing.md }}>
              {state.count !== null && <NotificationsSummary count={state.count} />}
              {state.error !== "" && (
                <>
                  <Typography variant="body2" color={theme.colors.error}>{state.error}</Typography>
                  <Button title="Tentar novamente" onPress={state.refresh} loading={state.busy} />
                </>
              )}
              {state.count !== null && state.count > 0 && (
                <Button title="Marcar todas como lidas" onPress={() => state.markRead()} loading={state.busy} />
              )}
            </View>
          }
          ListEmptyComponent={state.error ? null : <Typography variant="body2">Você ainda não possui notificações.</Typography>}
          renderItem={({ item }) => (
            <NotificationCard
              title={item.title}
              description={item.message}
              time={new Date(item.createdAt).toLocaleString("pt-BR")}
              icon={item.type === "SECURITY_ALERT" ? "shield" : "warning"}
              iconColor={theme.colors.primary}
              iconBackground={theme.colors.surfaceContainer}
              unread={!item.read}
              disabled={state.busy || item.read}
              onPress={() => state.markRead(item)}
            />
          )}
          ListFooterComponent={state.hasMore ? <Button title="Carregar mais" onPress={state.loadMore} loading={state.busy} /> : null}
        />
      )}
    </Screen>
  );
}

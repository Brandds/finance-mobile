import Screen from "@/components/Screen/Screen";
import Typography from "@/components/Typography/Typography";
import { View } from "react-native";



export default function NotificationScreen() {
  return (
    <Screen scrollable>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h1" color="#000000">
          Notifications
        </Typography>
      </View>
    </Screen> 
  );
}
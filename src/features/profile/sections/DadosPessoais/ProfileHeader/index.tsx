import { View } from "react-native";
import ProfileAvatar from "@/features/profile/components/Profile/ProfileAvatar";

import Typography from "@/components/Typography/Typography";


import { useTheme } from "@/theme/ThemeProvider";
import { styles as stylesProfileHeader } from "./styles";
import { ProfileHeaderProps } from "./types";

export default function ProfileHeader({
  name,
  imageUrl,
}: ProfileHeaderProps) {

  const theme = useTheme();
  const styles = stylesProfileHeader(theme);
  
  return (
    <View style={styles.container}>
      <ProfileAvatar imageUrl={imageUrl} initials={name.split(/\s+/).slice(0, 2).map(part => part[0]).join("").toUpperCase()} size={96} />

      {!!name && <Typography variant="h1">{name}</Typography>}
    </View>
  );
}

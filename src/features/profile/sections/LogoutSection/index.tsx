import {
    Pressable,
    View,
} from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import Typography from "@/components/Typography/Typography";

import { LogoutSectionProps } from "./types";

import { styles } from "./styles";

export default function LogoutSection({
    onLogoutPress,
}: LogoutSectionProps) {
    return (
    <Pressable
        onPress={onLogoutPress}
        style={styles.container}
    >
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
            }}
        > <MaterialIcons
                name="logout"
                size={20}
                color="#DC2626"
            />

            <Typography
                variant="body1"
                color="error"
            >
                Sair da conta
            </Typography>
        </View>
    </Pressable>


    );
}

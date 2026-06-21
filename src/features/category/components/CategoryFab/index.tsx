import React from "react";
import { Pressable, View } from "react-native";

import { styles as stylesCategoryFab} from "./styles";
import { CategoryFabProps } from "./types";
import { useTheme } from "@/theme/ThemeProvider";

export default function CategoryFab({
    icon,
    onPress,
}: CategoryFabProps) {

    const theme = useTheme();
    const styles = stylesCategoryFab(theme);

    return (
        <View style={styles.container}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.pressed,
                ]}
            >
                {icon}
            </Pressable>
        </View>
    );
}
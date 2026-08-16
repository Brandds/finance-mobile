import React from "react";
import { Pressable, View } from "react-native";

import { useTheme } from "@/theme/ThemeProvider";


import { Icon } from "@/components";
import FormFields from "@/components/FormFields/FormFields";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { fieldsCategorySearch } from "./fields";
import { CategorySearchFormData, categorySearchSchema } from "./schema";
import { styles } from "./styles";
import { CategorySearchProps } from "./types";

export function CategorySearch({
    onAddPress,
}: CategorySearchProps) {
    const theme = useTheme();

    const style = styles(theme);
    
    const {
        control,
        handleSubmit,
    } = useForm<CategorySearchFormData>({
        resolver: zodResolver(categorySearchSchema),
    
        defaultValues: {
          search:""
        },
      });


    return (
        <View style={style.container}>
            <View style={style.inputContainer}>
                <FormFields
                    fields={fieldsCategorySearch}
                    control={control}
                />

            </View>

            <Pressable
                onPress={onAddPress}
                style={({ pressed }) => [
                    style.addButton,
                    pressed && style.pressed,
                ]}
            >
                <Icon
                    name="search"
                    color={theme.colors.textSelect}
                />
            </Pressable>
        </View>
    );
}
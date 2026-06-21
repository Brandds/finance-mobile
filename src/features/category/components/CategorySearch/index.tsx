import React from "react";
import { Pressable, View } from "react-native";

import { useTheme } from "@/theme/ThemeProvider";


import { styles } from "./styles";
import { CategorySearchProps } from "./types";
import Input from "@/components/Input";
import { Icon } from "@/components";
import FormFields from "@/components/FormFields/FormFields";
import { fieldsCategorySearch } from "./fields";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CategorySearchFormData, categorySearchSchema } from "./schema";

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
                style={style.addButton}
                onPress={onAddPress}
            >
                <Icon
                    name="add"
                    color={theme.colors.textSecondary}
                />
            </Pressable>
        </View>
    );
}
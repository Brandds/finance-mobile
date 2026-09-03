import { useState } from "react";

import {
  Pressable,
  TextInput,
  View
} from "react-native";

import { Controller, FieldValues } from "react-hook-form";


import Typography from "@/components/Typography/Typography";


import { useTheme } from "@/theme/ThemeProvider";
import { Icon } from "../Icon/Icon";
import { InputProps } from "./types";
import { stylesIInput } from "./styles";

function Input<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  icon,
  secureTextEntry = false,
  library,
  keyboardType,
}: InputProps<T>) {
  const [showPassword, setShowPassword] =
    useState(false);

  const theme = useTheme();
  const styles = stylesIInput(theme);  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <View style={styles.field}>
          <Typography
            variant="body2"
            color={theme.colors.textSecondary}
          >
            {label}
          </Typography>

          <View
            style={[
              styles.inputContainer,
              error && styles.inputError,
            ]}
          >
            {icon && (
              <Icon
                name={icon as any}
                library={library}
                size={20}
                color={theme.colors.placeholder}
              />
            )}

            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder={placeholder}
              placeholderTextColor={
                theme.colors.placeholder
              }
              secureTextEntry={
                secureTextEntry && !showPassword
              }
              keyboardType={keyboardType}
              style={styles.input}
            />

            {secureTextEntry && (
              <Pressable
                onPress={() =>
                  setShowPassword(!showPassword)
                }
              >
                <Icon
                  name={
                    showPassword
                      ? "visibility-off"
                      : "visibility"
                  }
                  library={library}
                  size={20}
                  color={theme.colors.textSecondary}
                />
              </Pressable>
            )}
          </View>

          {error && (
            <Typography
              variant="body2"
              color={theme.colors.error}
            >
              {error.message}
            </Typography>
          )}
        </View>
      )}
    />
  );
}


export default Input;
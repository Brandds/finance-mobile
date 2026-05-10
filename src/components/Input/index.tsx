import { useState } from "react";

import {
  View,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";

import { Controller, FieldValues } from "react-hook-form";

import { MaterialIcons } from "@expo/vector-icons";

import Typography from "@/components/Typography/Typography";

import { tokens } from "@/theme/tokens";

import { InputProps } from "./types";
import { stylesIInput } from "./styles";

function Input<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  icon,
  secureTextEntry = false,
}: InputProps<T>) {
  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <View style={stylesIInput.field}>
          <Typography
            variant="body2"
            color={tokens.colors.textSecondary}
          >
            {label}
          </Typography>

          <View
            style={[
              stylesIInput.inputContainer,
              error && stylesIInput.inputError,
            ]}
          >
            {icon && (
              <MaterialIcons
                name={icon as any}
                size={20}
                color={tokens.colors.textSecondary}
              />
            )}

            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder={placeholder}
              placeholderTextColor={
                tokens.colors.textSecondary
              }
              secureTextEntry={
                secureTextEntry && !showPassword
              }
              style={stylesIInput.input}
            />

            {secureTextEntry && (
              <Pressable
                onPress={() =>
                  setShowPassword(!showPassword)
                }
              >
                <MaterialIcons
                  name={
                    showPassword
                      ? "visibility-off"
                      : "visibility"
                  }
                  size={20}
                  color={tokens.colors.textSecondary}
                />
              </Pressable>
            )}
          </View>

          {error && (
            <Typography
              variant="body2"
              color={tokens.colors.error}
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
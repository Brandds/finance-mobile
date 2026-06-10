import { useState } from "react";

import {
  Pressable,
  TextInput,
  View
} from "react-native";

import { Controller, FieldValues } from "react-hook-form";


import Typography from "@/components/Typography/Typography";

import { tokens } from "@/theme/tokens";

import { Icon } from "../Icon/Icon";
import { stylesIInput } from "./styles";
import { InputProps } from "./types";

function Input<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  icon,
  secureTextEntry = false,
  library,
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
              <Icon
                name={icon as any}
                library={library}
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
                <Icon
                  name={
                    showPassword
                      ? "visibility-off"
                      : "visibility"
                  }
                  library={library}
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
import { Platform } from "react-native";

function normalizeApiUrl(value: string) {
  // Validação explícita: o parser URL nativo não valida todos os formatos no React Native.
  const match = value.trim().match(/^(https?):\/\/([a-z0-9.-]+)(?::(\d{1,5}))?(\/[^\s?#\\]*)?$/i);
  if (!match) {
    throw new Error("EXPO_PUBLIC_API_URL deve ser uma URL HTTP/HTTPS sem credenciais, query ou fragmento.");
  }

  const [, protocol, host, port, rawPath = ""] = match;
  const validHost = host.length <= 253 && host.split(".").every(
    (label) => /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i.test(label),
  );
  const validIp = !/^[\d.]+$/.test(host) || (
    host.split(".").length === 4 && host.split(".").every((part) => Number(part) <= 255)
  );
  if (!validHost || !validIp || (port && (Number(port) < 1 || Number(port) > 65535))) {
    throw new Error("EXPO_PUBLIC_API_URL contém host ou porta inválidos.");
  }

  const path = rawPath.replace(/\/{2,}/g, "/").replace(/\/+$/, "");
  if (!path.endsWith("/api/v1") || path.split("/").some((part) => part === "." || part === "..")) {
    throw new Error("EXPO_PUBLIC_API_URL deve incluir o prefixo /api/v1.");
  }

  const hostname = host.toLowerCase();
  return `${protocol.toLowerCase()}://${hostname}${port ? `:${port}` : ""}${path}`;
}

function resolveApiUrl() {
  // O acesso direto permite que o Expo substitua a variável no bundle.
  const configuredUrl = process.env.EXPO_PUBLIC_API_URL;
  if (configuredUrl?.trim()) return normalizeApiUrl(configuredUrl);
  if (Platform.OS === "web") return "http://localhost:8083/api/v1";
  if (Platform.OS === "android") return "http://10.0.2.2:8083/api/v1";

  throw new Error(`EXPO_PUBLIC_API_URL é obrigatória no ambiente ${Platform.OS}. Configure a URL da API explicitamente.`);
}

export const URL_BASE = resolveApiUrl();

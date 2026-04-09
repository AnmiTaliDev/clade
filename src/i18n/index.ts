import en from "./locales/en.json";

export const defaultLocale = "en";

export const locales = {
  en,
} as const;

export type Locale = keyof typeof locales;
export type TranslationKey = string;

type DeepValue<T> = T extends Record<string, unknown>
  ? { [K in keyof T]: DeepValue<T[K]> }[keyof T]
  : T;

function getNestedValue(obj: Record<string, unknown>, path: string): string | undefined {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current === null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === "string" ? current : undefined;
}

export function t(key: string, params?: Record<string, string | number>, locale: Locale = defaultLocale): string {
  const translations = locales[locale] as unknown as Record<string, unknown>;
  const value = getNestedValue(translations, key);
  if (value === undefined) {
    console.warn(`[i18n] Missing translation: "${key}" for locale "${locale}"`);
    return key;
  }
  if (!params) return value;
  return Object.entries(params).reduce(
    (str, [param, replacement]) => str.replace(`{${param}}`, String(replacement)),
    value
  );
}

export function getTranslations(locale: Locale = defaultLocale) {
  return (key: string, params?: Record<string, string | number>) => t(key, params, locale);
}

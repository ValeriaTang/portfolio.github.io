/**
 * i18n/lang-switcher.ts
 *
 * Runtime locale management.
 * - Reads/writes `data-locale` on <html>
 * - Persists to localStorage
 * - Updates `lang` attribute for font-family and accessibility
 * - Dispatches a 'localechange' custom event so any component can re-render
 */

import { LOCALES, translations, type Locale } from './translations';

export const DEFAULT_LOCALE: Locale = 'ja';
const STORAGE_KEY = 'locale';

export function getSavedLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && saved in translations) return saved;
  } catch {}
  return DEFAULT_LOCALE;
}

export function getCurrentLocale(): Locale {
  const attr = document.documentElement.getAttribute('data-locale') as Locale | null;
  return attr && attr in translations ? attr : getSavedLocale();
}

export function setLocale(locale: Locale): void {
  const html = document.documentElement;
  const localeObj = LOCALES.find((l) => l.code === locale);
  html.setAttribute('data-locale', locale);
  html.setAttribute('lang', localeObj?.lang ?? locale);
  try { localStorage.setItem(STORAGE_KEY, locale); } catch {}
  html.dispatchEvent(new CustomEvent('localechange', { detail: { locale }, bubbles: true }));
}

/** Apply all [data-i18n] elements on the page for the given locale. */
export function applyTranslations(locale: Locale): void {
  const dict = translations[locale];
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n as keyof typeof dict;
    if (key && key in dict) el.textContent = dict[key];
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria as keyof typeof dict;
    if (key && key in dict) el.setAttribute('aria-label', dict[key]);
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder as keyof typeof dict;
    if (key && key in dict) (el as HTMLInputElement).placeholder = dict[key];
  });
}

/** Boot: restore locale on page load. */
export function initLocale(): Locale {
  const locale = getSavedLocale();
  setLocale(locale);
  return locale;
}

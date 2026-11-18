/**
 * ヘッダー（スクロール背景・モバイルメニュー・テーマ・ローカライズ）の共有ロジック。
 * 使用するコンポーネント（header / navigation）から `<script>import '../scripts/menu';</script>` で読み込む。
 */

import { getSavedLocale, applyTranslations, initLocale } from '../i18n/lang-switcher';

const SCROLL_THRESHOLD = 10;
const THEME_STORAGE_KEY = 'theme';

const header = document.querySelector('.site-header');

let scrollTicking = false;

function updateScrollBackground(): void {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY >= SCROLL_THRESHOLD);
  scrollTicking = false;
}

function onScroll(): void {
  if (!scrollTicking) {
    requestAnimationFrame(updateScrollBackground);
    scrollTicking = true;
  }
}

window.addEventListener('scroll', onScroll, { passive: true });
updateScrollBackground();

const toggleBtn = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-menu');

function toggleMobileMenu(): void {
  if (!toggleBtn || !mobileNav) return;
  const isOpen = toggleBtn.classList.toggle('is-active');
  mobileNav.classList.toggle('is-active', isOpen);
  toggleBtn.setAttribute('aria-expanded', String(isOpen));
}

toggleBtn?.addEventListener('click', toggleMobileMenu);

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    toggleBtn?.classList.remove('is-active');
    mobileNav?.classList.remove('is-active');
    toggleBtn?.setAttribute('aria-expanded', 'false');
  });
});

function setTheme(theme: string): void {
  const isLight = theme === 'light';
  if (isLight) {
    document.documentElement.setAttribute('data-theme', 'light');
    document.querySelectorAll<HTMLElement>('[data-i18n="theme.dark"], [data-i18n="theme.light"]').forEach((el) => {
      el.dataset.i18n = 'theme.light';
    });
  } else {
    document.documentElement.removeAttribute('data-theme');
    document.querySelectorAll<HTMLElement>('[data-i18n="theme.dark"], [data-i18n="theme.light"]').forEach((el) => {
      el.dataset.i18n = 'theme.dark';
    });
  }
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  applyTranslations(getSavedLocale());
}

const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
setTheme(initialTheme);

const themeBtn = document.getElementById('theme-toggle');
const mobileThemeBtn = document.getElementById('theme-toggle-mobile');

themeBtn?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  setTheme(current === 'light' ? 'dark' : 'light');
});

mobileThemeBtn?.addEventListener('click', () => {
  themeBtn?.click();
});

initLocale();
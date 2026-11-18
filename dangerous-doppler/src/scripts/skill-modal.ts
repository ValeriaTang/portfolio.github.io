/**
 * スキルモーダルの共有ロジック。
 * skill.astro（トップページ埋め込み）と skills.astro（スキルページ）の両方で共通利用。
 *
 * 各ページの <script> から initSkillModal() を呼び出す。
 * セレクタは skill.astro / skills.astro で同一：
 *   #skills / #skill-modal / #skill-modal-close-btn / #skill-modal-image
 *   #skill-modal-{title,level,skill,desc}
 *   .open-modal-btn (.skill-item 内)
 *   img[data-light-src][data-dark-src]  ← テーマ対応アイコン
 */

import { getSavedLocale, applyTranslations, initLocale } from '../i18n/lang-switcher';
import { translations } from '../i18n/translations';
import type { Locale } from '../i18n/translations';
import { initAnimations } from './animations';

const ROOT_ID = 'skills';
const MODAL_ID = 'skill-modal';
const OPEN_BTN_SELECTOR = '.open-modal-btn';

let lastCard: HTMLElement | null = null;

function $<T extends HTMLElement>(id: string): T | null {
  return document.getElementById(id) as T | null;
}

function dict() {
  return translations[getSavedLocale() as Locale];
}

/** モーダルにボタンの内容を流し込む */
function populateModal(btn: HTMLElement): void {
  const locale = getSavedLocale();
  const d = translations[locale as keyof typeof translations];

  const imageWrap = document.getElementById('skill-modal-image');
  const modalTitle = $<HTMLElement>('skill-modal-title');
  const modalLevel = $<HTMLElement>('skill-modal-level');
  const modalSkill = $<HTMLElement>('skill-modal-skill');
  const modalDesc = $<HTMLElement>('skill-modal-desc');

  let locales: Record<string, { level: string; genre: string; skill: string; description: string }> | null = null;
  try { locales = btn.dataset.locales ? JSON.parse(btn.dataset.locales) : null; } catch {}
  const loc = locales?.[locale] ?? locales?.['ja'] ?? null;

  if (modalTitle) modalTitle.textContent = btn.dataset.name ?? '';
  if (modalLevel) modalLevel.textContent = loc?.level ?? '';
  if (modalSkill) modalSkill.textContent = loc?.skill ?? '';
  if (modalDesc) modalDesc.textContent = loc?.description ?? '';

  renderImage(imageWrap, btn.dataset.image ?? '');
}

function renderImage(imageWrap: HTMLElement | null, src: string): void {
  if (!imageWrap) return;
  if (!src) {
    imageWrap.innerHTML = '';
    imageWrap.style.display = 'none';
    return;
  }
  imageWrap.style.display = 'block';
  imageWrap.innerHTML = `<img src="${src}" alt="" loading="lazy" />`;
}

/** 言語変更時のボタンテキスト更新 */
function updateSkillCards(): void {
  const locale = getSavedLocale();
  const d = translations[locale as keyof typeof translations];

  document.querySelectorAll<HTMLElement>(OPEN_BTN_SELECTOR).forEach((btn) => {
    let locales: Record<string, { level: string; genre: string; skill: string; description: string }> | null = null;
    try { locales = btn.dataset.locales ? JSON.parse(btn.dataset.locales) : null; } catch {}
    const loc = locales?.[locale] ?? locales?.['ja'] ?? null;

    const levelEl = btn.querySelector<HTMLElement>('.skill-level');
    if (levelEl && loc) {
      levelEl.textContent = loc.level;
    }
    btn.setAttribute('aria-label', `${btn.dataset.name ?? ''} (${loc?.level ?? ''}) の詳細を見る`);
  });

  const modal = $<HTMLDialogElement>(MODAL_ID)!;
  if (modal?.open && lastCard) populateModal(lastCard);

  document.querySelectorAll<HTMLElement>('[data-i18n="skills.modal.what"]').forEach((el) => {
    el.textContent = d['skills.modal.what'];
  });
  document.querySelectorAll<HTMLElement>('[data-i18n="skills.modal.desc"]').forEach((el) => {
    el.textContent = d['skills.modal.desc'];
  });
}

/** テーマ対応アイコン（light/dark 切替） */
function applyThemeImages(): void {
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  document.querySelectorAll<HTMLImageElement>('img[data-light-src][data-dark-src]').forEach((img) => {
    const src = isDark ? img.dataset.darkSrc! : img.dataset.lightSrc!;
    if (src && src !== img.src) img.src = src;
  });
}

/** テーマ変更を監視してアイコンを差し替え */
function observeTheme(): void {
  new MutationObserver(applyThemeImages).observe(document.documentElement, {
    attributes: true, attributeFilter: ['data-theme'],
  });
}

/** 初期化 */
export function initSkillModal(): void {
  const root = document.getElementById(ROOT_ID)!;
  const modal = $<HTMLDialogElement>(MODAL_ID)!;
  const closeBtn = $<HTMLElement>('skill-modal-close-btn');

  root.querySelectorAll<HTMLButtonElement>(OPEN_BTN_SELECTOR).forEach((btn) => {
    btn.addEventListener('click', () => {
      lastCard = btn;
      populateModal(btn);
      modal?.showModal();
    });
  });

  closeBtn?.addEventListener('click', () => modal?.close());
  modal?.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal?.open) modal.close(); });

  document.addEventListener('i18n:update', updateSkillCards);

  document.querySelectorAll('.skill-more-link a').forEach((link) => {
    link.addEventListener('click', (e) => e.stopPropagation());
  });

  applyThemeImages();
  observeTheme();

  const locale = initLocale();
  applyTranslations(locale);
  updateSkillCards();
  initAnimations();
}

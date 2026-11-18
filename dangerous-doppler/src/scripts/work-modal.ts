/**
 * 作品モーダルの共有ロジック。
 * work.astro（トップページ埋め込み）と works.astro（作品ページ）の両方で共通利用。
 *
 * 各ページの <script> から initWorkModal() を呼び出す。
 * セレクタは work.astro / works.astro で同一：
 *   #works / #work-modal / #work-modal-close-btn / #work-modal-gallery
 *   #work-modal-{title,ai,ai-desc,detail,period,tags,link}
 *   .work-card / .open-modal-btn / .work-title / .work-desc / .work-ai-note-text / .ai-ratio
 *   img[data-light-src][data-dark-src]  ← テーマ対応アイコン
 */

import { getSavedLocale, applyTranslations, initLocale } from '../i18n/lang-switcher';
import { translations } from '../i18n/translations';
import type { Locale } from '../i18n/translations';
import { initAnimations } from './animations';

const ROOT_ID = 'works';
const MODAL_ID = 'work-modal';
const CARD_SELECTOR = '.work-card';
const OPEN_BTN_SELECTOR = '.open-modal-btn';

let lastCard: HTMLElement | null = null;

function $<T extends HTMLElement>(id: string): T | null {
  return document.getElementById(id) as T | null;
}

function formatPeriod(start: string, finish: string): string {
  const fmt = (s: string) => s.replace('-', '.');
  return `${fmt(start)} 〜 ${fmt(finish)}`;
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

/** 画像 / アイコン src を安全化（javascript: 等を除外） */
function sanitizeUrl(src: string): string | null {
  if (!src) return null;
  try {
    const url = new URL(src, window.location.origin);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;
  } catch {
    return null;
  }
  return src;
}

function renderGallery(gallery: HTMLElement | null, images: string[]): void {
  if (!gallery) return;
  gallery.innerHTML = '';
  if (!images.length) {
    gallery.style.display = 'none';
    return;
  }
  gallery.style.display = 'flex';
  images.forEach((src) => {
    const img = document.createElement('img');
    img.src = sanitizeUrl(src) ?? '#';
    img.alt = 'Work image';
    img.loading = 'lazy';
    gallery.appendChild(img);
  });
}

function renderTags(tagsEl: HTMLElement | null, raw: string): void {
  if (!tagsEl) return;
  let tags: { name: string; icon: string | null; darkIcon: string | null }[] = [];
  try { tags = raw ? JSON.parse(raw) : []; } catch { tags = []; }
  tagsEl.innerHTML = '';
  tags.forEach((tag) => {
    const item = document.createElement('span');
    item.className = 'tag-item';
    if (tag.icon) {
      const img = document.createElement('img');
      img.className = 'tag-icon';
      img.src = sanitizeUrl(tag.icon) ?? '#';
      img.alt = tag.name;
      img.setAttribute('data-light-src', tag.icon);
      img.setAttribute('data-dark-src', tag.darkIcon ?? tag.icon);
      item.appendChild(img);
    } else {
      const text = document.createElement('span');
      text.className = 'tag-text';
      text.textContent = tag.name;
      item.appendChild(text);
    }
    tagsEl.appendChild(item);
  });
}


function populateModal(card: HTMLElement): void {
  const locale = getSavedLocale();
  const d = translations[locale as keyof typeof translations];

  const gallery = document.getElementById('work-modal-gallery');
  const modalTitle = $<HTMLElement>('work-modal-title');
  const modalAi = $<HTMLElement>('work-modal-ai');
  const modalAiDesc = $<HTMLElement>('work-modal-ai-desc');
  const modalDetail = $<HTMLElement>('work-modal-detail');
  const modalPeriod = $<HTMLElement>('work-modal-period');
  const modalTags = $<HTMLElement>('work-modal-tags');
  const modalLink = $<HTMLAnchorElement>('work-modal-link');

  let locales: Record<string, { title: string; description: string; AI: string }> | null = null;
  try { locales = card.dataset.locales ? JSON.parse(card.dataset.locales) : null; } catch {}
  const loc = locales?.[locale] ?? locales?.['ja'] ?? null;

  if (modalTitle) modalTitle.textContent = loc?.title ?? '';
  if (modalAi) modalAi.textContent = `${d['works.aiRatio']}: ${card.dataset.ai ?? ''}`;
  if (modalAiDesc) modalAiDesc.textContent = loc?.AI ?? '';
  if (modalDetail) modalDetail.textContent = loc?.description ?? '';
  if (modalPeriod) modalPeriod.textContent = formatPeriod(card.dataset.start ?? '', card.dataset.finish ?? '');
  if (modalLink) {
    const url = card.dataset.url ?? '#';
    if (!sanitizeUrl(url)) {
      modalLink.href = '#';
    } else {
      modalLink.href = url;
    }
    modalLink.textContent = d['works.modal.github'];
  }
  renderGallery(gallery, card.dataset.images ? JSON.parse(card.dataset.images) : []);
  renderTags(modalTags, card.dataset.tags ?? '');
  applyThemeImages();
}

/** カード / ボタンのクリックでモーダルを開く */
function bindCardEvents(root: HTMLElement | null): void {
  if (!root) return;

  root.querySelectorAll<HTMLElement>(CARD_SELECTOR).forEach((card) => {
    card.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) return;
      lastCard = card;
      populateModal(card);
      $<HTMLDialogElement>(MODAL_ID)!?.showModal();
    });
  });

  root.querySelectorAll<HTMLElement>(OPEN_BTN_SELECTOR).forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest<HTMLElement>(CARD_SELECTOR) ?? btn;
      lastCard = card;
      populateModal(card);
      $<HTMLDialogElement>(MODAL_ID)!?.showModal();
    });
  });
}

/** 言語変更時のカードテキスト更新 */
function updateCards(): void {
  const locale = getSavedLocale();
  const d = translations[locale as keyof typeof translations];

  document.querySelectorAll<HTMLElement>(CARD_SELECTOR).forEach((card) => {
    let locales: Record<string, { title: string; description: string; AI: string }> | null = null;
    try { locales = card.dataset.locales ? JSON.parse(card.dataset.locales) : null; } catch {}
    const loc = locales?.[locale] ?? locales?.['ja'] ?? null;

    const titleEl = card.querySelector<HTMLElement>('.work-title');
    const descEl = card.querySelector<HTMLElement>('.work-desc');
    const aiNoteEl = card.querySelector<HTMLElement>('.work-ai-note-text');
    const aiEl = card.querySelector<HTMLElement>('.ai-ratio');
    const tagsAria = card.querySelector<HTMLElement>('.work-tags');
    const btnDetail = card.querySelector<HTMLElement>(OPEN_BTN_SELECTOR);

    if (titleEl && loc) titleEl.textContent = loc.title;
    if (descEl && loc) descEl.textContent = loc.description;
    if (aiNoteEl && loc) aiNoteEl.textContent = loc.AI;

    if (aiEl) {
      aiEl.textContent = `${d['works.aiRatio']}: ${card.dataset.ai ?? ''}`;
    }
    if (tagsAria) tagsAria.setAttribute('aria-label', d['works.tags']);
    if (btnDetail && loc) {
      btnDetail.setAttribute('aria-label', `${loc.title} の詳細を見る`);
      const span = btnDetail.querySelector<HTMLElement>('[data-i18n="works.detail"]');
      if (span) span.textContent = d['works.detail'];
    }
  });

  const modal = $<HTMLDialogElement>(MODAL_ID)!;
  if (modal?.open && lastCard) populateModal(lastCard);

  const headings: [string, string][] = [
    ['works.card.period', d['works.card.period']],
    ['works.card.aiLocation', d['works.card.aiLocation']],
    ['works.card.overview', d['works.card.overview']],
    ['works.modal.period', d['works.modal.period']],
    ['works.modal.ai', d['works.modal.ai']],
    ['works.modal.detail', d['works.modal.detail']],
    ['works.tags', d['works.tags']],
  ];
  headings.forEach(([key, val]) => {
    document.querySelectorAll<HTMLElement>(`[data-i18n="${key}"]`).forEach((el) => {
      el.textContent = val;
    });
  });
}

/** 初期化 */
export function initWorkModal(): void {
  const root = document.getElementById(ROOT_ID)!;
  const modal = $<HTMLDialogElement>(MODAL_ID)!;
  const closeBtn = $<HTMLElement>('work-modal-close-btn');

  bindCardEvents(root);

  closeBtn?.addEventListener('click', () => modal?.close());
  modal?.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal?.open) modal.close(); });
  document.addEventListener('i18n:update', updateCards);

  document.querySelectorAll('.work-more-link a').forEach((link) => {
    link.addEventListener('click', (e) => e.stopPropagation());
  });

  applyThemeImages();
  observeTheme();

  const locale = initLocale();
  applyTranslations(locale);
  updateCards();
  initAnimations();
}

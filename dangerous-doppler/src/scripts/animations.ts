const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/** ----------------------------------------------------------------
 *  スクロールリビール（IntersectionObserver）
 *  ---------------------------------------------------------------- */
function initReveal(): void {
  if (prefersReduced) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -60px 0px', threshold: 0.1 },
  );

  // 自動対象: セクション内のカード/アイテム/見出し
  const targets = document.querySelectorAll<HTMLElement>(
    [
      '.work-card',
      '.skill-item',
      '.genre-heading',
      '.genre-section',
      '.about-title',
      '.about-desc',
      '.about-company',
      '.about-period',
      '.about-skills',
      '.hero-title',
      '.hero-subtitle',
      '.section-title',
    ].join(','),
  );

  targets.forEach((el) => {
    el.classList.add('js-reveal');
    observer.observe(el);
  });
}

/** ----------------------------------------------------------------
 *  カード 3D チルト（マウス移動に追従）
 *  ---------------------------------------------------------------- */
function initCardTilt(): void {
  if (prefersReduced) return;

  const cards = document.querySelectorAll<HTMLElement>('.tilt-card');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 6; // ±6deg
      const rotateY = ((x - centerX) / centerX) * -6;
      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(600px) rotateX(0) rotateY(0)';
    });
  });
}

/** ----------------------------------------------------------------
 *  クリック波紋（リップル） — ボタン .ripple-host に適用
 *  ---------------------------------------------------------------- */
function initRipple(): void {
  if (prefersReduced) return;

  document.querySelectorAll<HTMLElement>('.ripple-host').forEach((host) => {
    host.addEventListener('click', (e) => {
      const rect = host.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const ink = document.createElement('span');
      ink.className = 'ripple-ink';
      ink.style.width = ink.style.height = `${size}px`;
      ink.style.left = `${e.clientX - rect.left - size / 2}px`;
      ink.style.top = `${e.clientY - rect.top - size / 2}px`;
      host.appendChild(ink);
      ink.addEventListener('animationend', () => ink.remove());
    });
  });
}

/** ----------------------------------------------------------------
 *  一括初期化
 *  ---------------------------------------------------------------- */
export function initAnimations(): void {
  initReveal();
  initCardTilt();
  initRipple();
}
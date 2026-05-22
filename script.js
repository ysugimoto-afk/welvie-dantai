// ===========================================
// LP インタラクション
// ===========================================

// JS有効フラグ(JS無効時はreveal初期非表示を無効化するため)
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {

  // === スクロール フェードイン(IntersectionObserver) ===
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    // フォールバック: すべて表示
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // === スティッキーCTAの表示制御(ヒーロー範囲では非表示) ===
  const sticky = document.querySelector('.sticky-cta');
  const heroEl = document.querySelector('.hero');
  if (sticky && heroEl && 'IntersectionObserver' in window) {
    const heroObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        sticky.style.opacity = entry.isIntersecting ? '0' : '1';
        sticky.style.pointerEvents = entry.isIntersecting ? 'none' : 'auto';
      });
    }, { threshold: 0.05 });
    heroObs.observe(heroEl);
    sticky.style.transition = 'opacity 0.3s ease';
  }

  // === スムーズスクロール(アンカーリンク、reduce-motion対応) ===
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const href = a.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start'
      });
    });
  });

});

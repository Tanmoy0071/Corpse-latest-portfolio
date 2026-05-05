'use client';
import { useEffect, useRef } from 'react';

export default function ScrollReveal() {
  const ref = useRef<boolean>(false);

  useEffect(() => {
    const init = () => {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.07 });
      document.querySelectorAll(
        '.reveal:not(.revealed), .reveal-left:not(.revealed), .reveal-scale:not(.revealed)'
      ).forEach(el => obs.observe(el));
      return obs;
    };

    const obs = init();
    // Re-run when DOM changes (page switches)
    const mo = new MutationObserver(() => {
      document.querySelectorAll(
        '.reveal:not(.revealed), .reveal-left:not(.revealed), .reveal-scale:not(.revealed)'
      ).forEach(el => obs.observe(el));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => { obs.disconnect(); mo.disconnect(); };
  }, []);

  return null;
}

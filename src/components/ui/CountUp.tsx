'use client';
import { useEffect, useRef, CSSProperties } from 'react';

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

export default function CountUp({ target, suffix = '', duration = 1600, className, style }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const observed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || observed.current) return;

    const run = () => {
      if (observed.current) return;
      observed.current = true;
      const isFloat = target % 1 !== 0;
      const start = performance.now();
      const frame = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = (isFloat ? (ease * target).toFixed(1) : Math.floor(ease * target)) + suffix;
        if (p < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };

    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { run(); obs.disconnect(); }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix, duration]);

  return <span ref={ref} className={className} style={style}>0{suffix}</span>;
}

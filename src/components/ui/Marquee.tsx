'use client';
import { useEffect, useRef } from 'react';

interface MarqueeProps {
  items: string[];
}

export default function Marquee({ items }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const cloned = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || cloned.current) return;
    cloned.current = true;
    const children = Array.from(track.children);
    children.forEach(child => track.appendChild(child.cloneNode(true)));
    children.forEach(child => track.appendChild(child.cloneNode(true)));
  }, []);

  return (
    <div
      style={{
        overflow: 'hidden',
        borderBottom: '1px solid var(--g200)',
        padding: '16px 0',
        background: 'var(--red)',
        width: '100%',
      }}
    >
      <div ref={trackRef} className="marquee-track" style={{ display: 'flex', width: 'max-content', animation: 'scrollX 30s linear infinite' }}>
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              fontFamily: 'var(--font-sub)',
              fontWeight: 500,
              fontSize: '16px',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              color: '#000',
              padding: '0 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            {item}
            <span style={{ width: '6px', height: '6px', background: '#000', borderRadius: '99px', display: 'inline-block' }} />
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollX {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33333%); }
        }
      `}} />
    </div>
  );
}

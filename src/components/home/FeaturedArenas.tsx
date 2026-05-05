'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { useNav } from '@/context/NavContext';

interface Arena {
  img: string;
  alt: string;
  live: boolean;
  stamp: string;
  game: string;
  title: string;
  entryFee: string;
  prizePool: string;
  squads: string;
  window: string;
  countdown: number; // seconds
}

const ARENAS: Arena[] = [
  {
    img: '/assets/match-hero-2.png',
    alt: 'Squad mode',
    live: true,
    stamp: 'LIVE',
    game: '// BGMI · Squad',
    title: 'Knockout\nTournament',
    entryFee: '₹ 59 / PLAYER',
    prizePool: '₹ 3,000',
    squads: '23 / 25',
    window: 'SUN 02:30 PM',
    countdown: 35125,
  },
  {
    img: '/assets/match-hero-3.png',
    alt: 'TDM mode',
    live: false,
    stamp: 'REGN. OPEN',
    game: '// CODM · TDM',
    title: 'CODM Cup\nRound 02',
    entryFee: '₹ 99 / PLAYER',
    prizePool: '₹ 12,000',
    squads: '15 / 16',
    window: 'TUE 08:00 PM',
    countdown: 151089,
  },
  {
    img: '/assets/match-hero-squad.png',
    alt: 'Bermuda Battle Royal',
    live: false,
    stamp: 'REGN. OPEN',
    game: '// FREEFIRE · BR',
    title: 'Bermuda\nBattle Royal',
    entryFee: '₹ 49 / PLAYER',
    prizePool: '₹ 5,000',
    squads: '40 / 64',
    window: 'WED 09:30 PM',
    countdown: 237771,
  },
];

function useClock(initialSeconds: number) {
  const [secs, setSecs] = useState(initialSeconds);
  useEffect(() => {
    const id = setInterval(() => setSecs(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(secs / 3600)).padStart(2, '0');
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function ArenaCard({ arena }: { arena: Arena }) {
  const time = useClock(arena.countdown);
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', flexDirection: 'column', gap: '16px',
        padding: '24px',
        background: hovered ? '#111' : '#070707',
        borderRight: '1px solid #2B2A2A',
        transition: 'background 200ms',
        cursor: 'none',
        position: 'relative',
      }}
    >
      {/* Image */}
      <div style={{ aspectRatio: '16/10', background: '#1B1B1B', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
        <Image src={arena.img} alt={arena.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width:640px) 100vw, 33vw" />
        <span style={{
          position: 'absolute', top: '12px', left: '12px',
          background: arena.live ? '#FF0000' : 'rgba(7,7,7,0.7)',
          backdropFilter: 'blur(6px)',
          color: '#fff',
          padding: '5px 9px 6px',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '9.5px', letterSpacing: '-0.02em', textTransform: 'uppercase',
          borderRadius: '2px',
          display: 'inline-flex', alignItems: 'center', gap: '6px',
        }}>
          {arena.live && <span style={{ width: '5px', height: '5px', background: '#fff', borderRadius: '50%', display: 'inline-block' }} />}
          {arena.stamp}
        </span>
      </div>

      {/* Game tag */}
      <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', letterSpacing: '0.16em', color: '#FF0000', textTransform: 'uppercase', fontWeight: 300 }}>
        {arena.game}
      </span>

      {/* Title */}
      <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '26px', lineHeight: 1.05, letterSpacing: '-0.025em', textTransform: 'uppercase', color: '#fff' }}>
        {arena.title.split('\n').map((line, i) => <span key={i} style={{ display: 'block' }}>{line}</span>)}
      </h3>

      {/* Meta grid */}
      <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', paddingTop: '18px', borderTop: '1px solid #2B2A2A' }}>
        {[
          { k: 'Entry fee', v: arena.entryFee, red: false },
          { k: 'Prize pool', v: arena.prizePool, red: true },
          { k: 'Squads', v: arena.squads, red: false },
          { k: 'Window', v: arena.window, red: false },
        ].map(({ k, v, red }) => (
          <div key={k}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '9.5px', color: '#7E7E7E', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>{k}</div>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontWeight: 500, fontSize: '14px', letterSpacing: '-0.03em', color: red ? '#FF0000' : '#fff', marginTop: '2px' }}>{v}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', color: '#7E7E7E', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
          regn. closes{' '}
          <span style={{ color: '#FF0000', background: 'rgba(255,0,0,0.1)', padding: '3px 6px', borderRadius: '2px', marginLeft: '4px' }}>
            [{time}]
          </span>
        </span>
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '18px', color: hovered ? '#FF0000' : '#fff', transition: 'color 200ms, transform 200ms', transform: hovered ? 'translateX(4px)' : 'none', display: 'inline-block' }}>
          →
        </span>
      </div>
    </article>
  );
}

export default function FeaturedArenas() {
  const { navigate } = useNav();
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';
  const px = isMobile ? '24px' : isTablet ? '40px' : '80px';

  // Live clock for header
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false }) + ' IST';

  return (
    <section style={{ padding: `96px ${px}`, borderBottom: '1px solid #2B2A2A', background: 'var(--black)' }}>
      {/* Section header */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr auto',
        alignItems: 'end',
        gap: isMobile ? '16px' : '32px',
        paddingBottom: '48px',
        borderBottom: '1px solid #2B2A2A',
        marginBottom: '0',
      }}>
        {/* Index */}
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: '#7E7E7E', letterSpacing: '-0.02em', textTransform: 'uppercase', alignSelf: 'start' }}>
          <b style={{ color: '#FF0000', fontWeight: 400 }}>// 01</b><br />Arenas
        </span>

        {/* Heading */}
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(40px, 7vw, 100px)', lineHeight: 0.92, letterSpacing: '-0.04em', textTransform: 'uppercase', color: '#fff' }}>
          Featured arenas,{' '}
          <em style={{ fontStyle: 'normal', fontFamily: 'var(--font-sub)', fontWeight: 300, color: '#7E7E7E', letterSpacing: '-0.02em', textTransform: 'none' }}>
            this week.
          </em>
        </h2>

        {/* Aside */}
        {!isMobile && (
          <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: '#7E7E7E', letterSpacing: '-0.02em', textTransform: 'uppercase', textAlign: 'right' }}>
            Updated <b style={{ color: '#fff', fontWeight: 500 }}>{timeStr}</b><br />
            regn. closes per slot ·{' '}
            <button onClick={() => navigate('compete')} style={{ background: 'none', border: 'none', color: '#FF0000', fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', letterSpacing: '-0.02em', textTransform: 'uppercase', cursor: 'none', padding: 0 }}>
              view all →
            </button>
          </span>
        )}
      </div>

      {/* Arena cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3, 1fr)',
        borderTop: '1px solid #2B2A2A',
        borderBottom: '1px solid #2B2A2A',
      }}>
        {ARENAS.map((arena, i) => (
          <div
            key={i}
            style={{ borderRight: (!isMobile && i < (isTablet ? 1 : 2)) ? '1px solid #2B2A2A' : 'none' }}
          >
            <ArenaCard arena={arena} />
          </div>
        ))}
      </div>
    </section>
  );
}

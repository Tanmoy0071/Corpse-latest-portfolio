'use client';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { useNav } from '@/context/NavContext';

const PILLARS = [
  {
    num: '// 04.01',
    title: ['Register your ', 'squad'],
    body: 'Pick a mode. Pay the entry fee. Lock in 1, 2 or 4 players. Your shard ID is yours forever — every match adds to it.',
    footLabel: 'Modes',
    footValue: 'SOLO · DUO · SQUAD',
  },
  {
    num: '// 04.02',
    title: ['Drop into the ', 'arena'],
    body: 'Custom rooms spin up in under 90 seconds. Bracket auto-seeded by ELO. Live anti-cheat watches every shot, every kill, every revive.',
    footLabel: 'Spin-up',
    footValue: '< 90 SEC',
  },
  {
    num: '// 04.03',
    title: ['Get paid by ', 'morning'],
    body: 'Winners settle directly to UPI, NEFT or IMPS. Average payout time on this network is just under four and a half hours, end to end.',
    footLabel: 'Avg payout',
    footValue: '04:21 HRS',
  },
];

export default function ArenaPillars() {
  const { navigate } = useNav();
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';
  const px = isMobile ? '24px' : isTablet ? '40px' : '80px';

  return (
    <section style={{ padding: `96px ${px}`, borderBottom: '1px solid #2B2A2A', background: 'var(--black)' }}>
      {/* Section header — identical pattern to FeaturedArenas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr auto',
        alignItems: 'end',
        gap: isMobile ? '16px' : '32px',
        paddingBottom: '48px',
        borderBottom: '1px solid #2B2A2A',
        marginBottom: '0',
      }}>
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: '#7E7E7E', letterSpacing: '-0.02em', textTransform: 'uppercase', alignSelf: 'start' }}>
          <b style={{ color: '#FF0000', fontWeight: 400 }}>// 04</b><br />The arena
        </span>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(40px, 7vw, 100px)', lineHeight: 0.92, letterSpacing: '-0.04em', textTransform: 'uppercase', color: '#fff' }}>
          How the bracket{' '}
          <em style={{ fontStyle: 'normal', fontFamily: 'var(--font-sub)', fontWeight: 300, color: '#7E7E7E', letterSpacing: '-0.02em', textTransform: 'none' }}>
            actually works.
          </em>
        </h2>
        {!isMobile && (
          <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: '#7E7E7E', letterSpacing: '-0.02em', textTransform: 'uppercase', textAlign: 'right' }}>
            No bots. No filler.<br />
            <button onClick={() => navigate('compete')} style={{ background: 'none', border: 'none', color: '#FF0000', fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', letterSpacing: '-0.02em', textTransform: 'uppercase', cursor: 'none', padding: 0 }}>
              real squads only →
            </button>
          </span>
        )}
      </div>

      {/* Pillars grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3, 1fr)',
        borderTop: '1px solid #2B2A2A',
        borderBottom: '1px solid #2B2A2A',
      }}>
        {PILLARS.map((p, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              padding: isMobile ? '32px 24px' : '48px',
              borderRight: (!isMobile && i < (isTablet ? 1 : 2)) ? '1px solid #2B2A2A' : 'none',
              borderBottom: (isMobile && i < 2) ? '1px solid #2B2A2A' : 'none',
              display: 'flex', flexDirection: 'column', gap: '18px',
              minHeight: isMobile ? 'auto' : '380px',
              background: 'var(--black)',
            }}
          >
            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: '#FF0000', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              {p.num}
            </span>
            <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px, 3.4vw, 52px)', letterSpacing: '-0.04em', lineHeight: 0.95, textTransform: 'uppercase', color: '#fff' }}>
              {p.title[0]}
              <em style={{ fontStyle: 'normal', fontFamily: 'var(--font-sub)', fontWeight: 300, color: '#FF0000', letterSpacing: '-0.02em', textTransform: 'none' }}>
                {p.title[1]}
              </em>
            </h3>
            <p style={{ margin: 0, fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: 1.55, color: '#7E7E7E', maxWidth: '36ch' }}>
              {p.body}
            </p>
            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid #2B2A2A', fontFamily: '"JetBrains Mono", monospace', fontSize: '10.5px', color: '#7E7E7E', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              <b style={{ color: '#fff', fontWeight: 500 }}>{p.footLabel}</b>
              <span>{p.footValue}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

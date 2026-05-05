'use client';
import { useBreakpoint } from '@/hooks/useBreakpoint';

const ROUNDS = [
  {
    title: 'Round of 8',
    matches: [
      { p1: 'Ariadne Voss', s1: '3', p2: 'C. Morgan', s2: '1', winner: 1 },
      { p1: 'Ren Takahashi', s1: '3', p2: 'S. Elander', s2: '2', winner: 1 },
      { p1: 'Marcus Field', s1: '3', p2: 'P. Nair', s2: '0', winner: 1 },
      { p1: 'Yuki Sato', s1: '3', p2: 'D. Ferreira', s2: '2', winner: 1 },
    ],
  },
  {
    title: 'Semi-finals',
    matches: [
      { p1: 'Ariadne Voss', s1: '3', p2: 'Ren Takahashi', s2: '2', winner: 1, marginTop: '32px' },
      { p1: 'Marcus Field', s1: '—', p2: 'Yuki Sato', s2: '—', winner: 0, marginTop: '60px', pending: true },
    ],
  },
  {
    title: 'Final',
    matches: [
      { p1: 'Ariadne Voss', s1: '—', p2: 'TBD', s2: '—', winner: 0, marginTop: '80px', pending: true },
    ],
  },
];

export default function BracketViz() {
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';
  const px = isMobile ? '24px' : isTablet ? '40px' : '80px';

  const playerStyle = (isWinner: boolean, pending?: boolean): React.CSSProperties => ({
    padding: '8px 10px',
    fontFamily: 'var(--font-ui)',
    fontSize: '11px',
    color: pending ? 'var(--g500)' : isWinner ? 'var(--white)' : 'var(--g500)',
    background: isWinner && !pending ? 'rgba(232,25,26,0.08)' : 'transparent',
    borderBottom: '1px solid var(--g300)',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '8px',
  });

  return (
    <section style={{ padding: `${isMobile ? '60px' : '80px'} ${px}`, background: 'var(--g100)', borderTop: '1px solid var(--g200)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--red)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>Live bracket</div>
        <h2 className="reveal delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,5vw,48px)', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.92, marginBottom: '40px' }}>
          WINTER<br />INVITATIONAL
        </h2>

        {/* Horizontally scrollable bracket */}
        <div style={{ display: 'flex', gap: 0, overflowX: 'auto', paddingBottom: '12px', WebkitOverflowScrolling: 'touch' }}>
          {ROUNDS.map(round => (
            <div key={round.title} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', minWidth: '160px', flexShrink: 0 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--g400)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>
                {round.title}
              </div>
              {round.matches.map((m, i) => (
                <div key={i} style={{ background: 'var(--g200)', border: '1px solid var(--g300)', margin: '6px 8px', marginTop: (m as any).marginTop || '6px' }}>
                  <div style={{ ...playerStyle(m.winner === 1, (m as any).pending), borderBottom: '1px solid var(--g300)' }}>
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.p1}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: m.winner === 1 && !(m as any).pending ? 'var(--red)' : 'var(--g400)', flexShrink: 0 }}>{m.s1}</span>
                  </div>
                  <div style={{ ...playerStyle(m.winner === 2, (m as any).pending), borderBottom: 'none' }}>
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.p2}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: m.winner === 2 && !(m as any).pending ? 'var(--red)' : 'var(--g400)', flexShrink: 0 }}>{m.s2}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

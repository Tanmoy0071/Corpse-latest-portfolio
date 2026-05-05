'use client';
import { useBreakpoint } from '@/hooks/useBreakpoint';

const PARAS = [
  { html: '<strong>Competition is the only honest test.</strong> Not what you say. Not what you claim. What you do when it counts — when the bracket is live, the round is ticking, and the arena is watching.', delay: '' },
  { html: 'Corps Arena was built because <span style="color:var(--red)">elite competitors deserve an elite stage.</span> Not a hobbyist leaderboard. Not an afterthought bracket tool bolted onto something else. A platform built from the ground up for people who show up to win.', delay: 'delay-1' },
  { html: 'We keep the rules clean, the rankings honest, and the schedule tight. <strong>No padding. No politics.</strong> The arena decides.', delay: 'delay-2' },
  { html: 'We\'re not here to celebrate participation. We\'re here to <span style="color:var(--red)">crown champions</span> — and to build the most rigorous, most respected competitive platform on earth.', delay: 'delay-3' },
];

export default function Manifesto() {
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';
  const px = isMobile ? '24px' : isTablet ? '40px' : '80px';

  return (
    <section style={{ padding: `${isMobile ? '60px' : '100px'} ${px}`, background: 'var(--black)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 2fr', gap: isMobile ? '40px' : '80px', alignItems: 'start' }}>
        <div style={{ position: isMobile || isTablet ? 'static' : 'sticky', top: '100px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--red)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>Manifesto</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? '36px' : '40px', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1, marginBottom: '20px' }}>
            WHY WE<br />EXIST
          </h2>

        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '32px' : '48px' }}>
          {PARAS.map((p, i) => (
            <p
              key={i}
              className={`reveal ${p.delay}`}
              style={{ fontFamily: 'var(--font-sub)', fontSize: isMobile ? '16px' : '19px', color: 'var(--g600)', lineHeight: 1.7 }}
              dangerouslySetInnerHTML={{ __html: p.html }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

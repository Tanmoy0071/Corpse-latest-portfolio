'use client';
import { FEATURES } from '@/lib/data';
import { useBreakpoint } from '@/hooks/useBreakpoint';

export default function FeaturesGrid() {
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';
  const px = isMobile ? '24px' : isTablet ? '40px' : '80px';
  const cols = isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1fr 1fr 1fr';

  return (
    <section style={{ padding: `${isMobile ? '64px' : '120px'} ${px}`, background: 'var(--black)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--red)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>
          Platform
        </div>
        <h2 className="reveal delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 6vw, 72px)', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.92, marginBottom: '24px' }}>
          BUILT FOR<br />WINNERS
        </h2>
        <p className="reveal delay-2" style={{ fontFamily: 'var(--font-sub)', fontSize: isMobile ? '15px' : '18px', color: 'var(--g500)', lineHeight: 1.6, maxWidth: '520px' }}>
          Everything you need to compete at the highest level. No filler. No noise. Just the arena.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: '2px', marginTop: isMobile ? '40px' : '64px' }}>
          {FEATURES.map((f, i) => {
            const delay = `delay-${(i % 3) + 1}` as string;
            return (
              <div
                key={f.num}
                className={`reveal ${delay}`}
                style={{ background: 'var(--g100)', border: '1px solid var(--g200)', padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px', transition: 'background 200ms, transform 200ms var(--ease)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'var(--g200)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'var(--g100)'; (e.currentTarget as HTMLDivElement).style.transform = 'none'; }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--red)', letterSpacing: '0.1em' }}>{f.num}</span>
                <div style={{ width: '48px', height: '48px', border: '1px solid var(--g300)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" style={{ width: '22px', height: '22px', stroke: 'var(--g500)', fill: 'none', strokeWidth: 1.5 }} dangerouslySetInnerHTML={{ __html: f.svgPath }} />
                </div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '17px', color: 'var(--white)', lineHeight: 1.3 }}>{f.title}</div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--g400)', lineHeight: 1.7, fontWeight: 300 }}>{f.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

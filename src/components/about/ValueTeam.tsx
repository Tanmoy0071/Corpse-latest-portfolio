'use client';
import { VALUES, TEAM } from '@/lib/data';
import { useBreakpoint } from '@/hooks/useBreakpoint';

export function ValuesSection() {
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';
  const px = isMobile ? '24px' : isTablet ? '40px' : '80px';
  const cols = isMobile ? '1fr 1fr' : isTablet ? '1fr 1fr' : '1fr 1fr 1fr 1fr';

  return (
    <section style={{ padding: `${isMobile ? '60px' : '80px'} ${px}`, background: 'var(--g100)', borderTop: '1px solid var(--g200)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--red)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>What we stand for</div>
        <h2 className="reveal delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,5vw,52px)', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.92, marginBottom: '40px' }}>
          FOUR<br />PRINCIPLES
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: '2px' }}>
          {VALUES.map((v, i) => (
            <div
              key={v.num}
              className={`reveal ${i > 0 ? `delay-${i}` : ''}`}
              style={{ background: 'var(--black)', border: '1px solid var(--g200)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--red)', letterSpacing: '0.1em' }}>{v.num}</span>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? '20px' : '24px', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>{v.title}</div>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--g400)', lineHeight: 1.65, fontWeight: 300 }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeamSection() {
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';
  const px = isMobile ? '24px' : isTablet ? '40px' : '80px';
  const cols = isMobile ? '1fr 1fr' : isTablet ? '1fr 1fr' : 'repeat(4, 1fr)';

  return (
    <section style={{ padding: `${isMobile ? '60px' : '80px'} ${px}`, background: 'var(--black)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--red)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>The team</div>
        <h2 className="reveal delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,5vw,52px)', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.92, marginBottom: '40px' }}>
          WHO<br />WE ARE
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: '2px' }}>
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              className={`reveal ${i > 0 ? `delay-${Math.min(i, 4)}` : ''}`}
              style={{ background: 'var(--g100)', border: '1px solid var(--g200)', overflow: 'hidden' }}
            >
              <div style={{ height: isMobile ? '120px' : '160px', background: 'var(--g200)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: isMobile ? '40px' : '52px', color: 'var(--g300)' }}>
                {member.initial}
              </div>
              <div style={{ padding: isMobile ? '14px' : '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: isMobile ? '13px' : '15px', color: 'var(--white)' }}>{member.name}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--g400)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';
import { useBreakpoint } from '@/hooks/useBreakpoint';

export default function StatsStrip() {
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';

  const px = isMobile ? '24px' : isTablet ? '40px' : '56px';

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr 1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      padding: '24px 0',
      background: 'var(--black)',
      borderTop: '1px solid var(--g200)',
      gap: isMobile ? '32px 0' : '0',
    }}>
      <div style={{ borderLeft: 'none', padding: isMobile ? '0 16px 0 24px' : `0 32px 0 ${px}` }}>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '9px', letterSpacing: '0.1em', color: 'var(--g400)', textTransform: 'uppercase' }}>
          Total prizes paid
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 42px)', fontWeight: 500, letterSpacing: '-0.04em', color: '#fff', marginTop: '12px', lineHeight: 1 }}>
          ₹4.2<span style={{ color: 'var(--red)' }}>Cr</span>
        </div>
      </div>
      <div style={{ borderLeft: isMobile ? 'none' : '1px solid var(--g200)', padding: isMobile ? '0 24px 0 16px' : '0 32px' }}>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '9px', letterSpacing: '0.1em', color: 'var(--g400)', textTransform: 'uppercase' }}>
          Tournaments / wk
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 42px)', fontWeight: 500, letterSpacing: '-0.04em', color: '#fff', marginTop: '12px', lineHeight: 1 }}>
          1,840 <small style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', color: 'var(--g400)', letterSpacing: '0.05em', marginLeft: '4px', fontWeight: 400 }}>BR / TDM / SQUAD</small>
        </div>
      </div>
      <div style={{ borderLeft: (isMobile || isTablet) ? 'none' : '1px solid var(--g200)', padding: isMobile ? '0 16px 0 24px' : '0 32px' }}>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '9px', letterSpacing: '0.1em', color: 'var(--g400)', textTransform: 'uppercase' }}>
          Avg payout time
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 42px)', fontWeight: 500, letterSpacing: '-0.04em', color: '#fff', marginTop: '12px', lineHeight: 1 }}>
          04:21 <small style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', color: 'var(--g400)', letterSpacing: '0.05em', marginLeft: '4px', fontWeight: 400 }}>HRS</small>
        </div>
      </div>
      <div style={{ borderLeft: isMobile ? 'none' : isTablet ? '1px solid var(--g200)' : '1px solid var(--g200)', padding: isMobile ? '0 24px 0 16px' : '0 32px' }}>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '9px', letterSpacing: '0.1em', color: 'var(--g400)', textTransform: 'uppercase' }}>
          Registered players
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 42px)', fontWeight: 500, letterSpacing: '-0.04em', color: '#fff', marginTop: '12px', lineHeight: 1 }}>
          312K
        </div>
      </div>
    </div>
  );
}

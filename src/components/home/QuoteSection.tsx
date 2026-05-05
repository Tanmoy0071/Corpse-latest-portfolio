'use client';
import { useBreakpoint } from '@/hooks/useBreakpoint';

export default function QuoteSection() {
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';
  const px = isMobile ? '24px' : isTablet ? '40px' : '80px';

  return (
    <section style={{ padding: `${isMobile ? '60px' : '100px'} ${px}`, background: 'var(--g100)', borderTop: '1px solid var(--g200)', borderBottom: '1px solid var(--g200)' }}>
      <div className="reveal" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <blockquote
          className="big-quote"
          style={{ fontFamily: 'var(--font-brand)', fontSize: 'clamp(22px,4vw,52px)', color: 'var(--white)', lineHeight: 1.2, maxWidth: '900px', position: 'relative', paddingLeft: '28px' }}
        >
          &quot;The arena doesn&apos;t care where you came from. It only asks what you&apos;re made of.&quot;
        </blockquote>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--g400)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '20px', paddingLeft: '28px' }}>
          Corps Arena · Season 1 Opening
        </div>
      </div>
    </section>
  );
}

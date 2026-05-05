'use client';
import { useBreakpoint } from '@/hooks/useBreakpoint';

export default function AboutHero() {
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';
  const px = isMobile ? '24px' : isTablet ? '40px' : '80px';

  return (
    <section style={{ padding: `140px ${px} ${isMobile ? '60px' : '80px'}`, minHeight: isMobile ? '60vh' : '80vh', display: 'flex', alignItems: 'flex-end', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--black)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
        <div style={{ position: 'absolute', bottom: '-200px', left: '-100px', width: isMobile ? '350px' : '600px', height: isMobile ? '350px' : '600px', background: 'radial-gradient(circle,rgba(232,25,26,0.12) 0%,transparent 65%)' }} />
      </div>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
        <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--red)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>Our story</div>
        <h1 className="reveal delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px,9vw,120px)', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.92, marginBottom: '24px' }}>
          BUILT FOR<br />THE <span style={{ color: 'var(--red)' }}>ARENA</span>
        </h1>
        <p className="reveal delay-2" style={{ fontFamily: 'var(--font-sub)', fontSize: isMobile ? '16px' : '20px', color: 'var(--g500)', lineHeight: 1.6, maxWidth: '520px' }}>
          We believe competition reveals character. Corps Arena exists to give every serious competitor a stage worthy of their ambition.
        </p>
      </div>
    </section>
  );
}

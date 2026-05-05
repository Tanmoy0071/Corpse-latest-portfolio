'use client';
import { useNav } from '@/context/NavContext';
import { useBreakpoint } from '@/hooks/useBreakpoint';

interface BigCtaProps {
  title: string;
  body: string;
  buttonLabel: string;
  buttonPage: 'home' | 'compete' | 'roster' | 'about';
  secondaryLabel?: string;
  secondaryPage?: 'home' | 'compete' | 'roster' | 'about';
}

export default function BigCta({ title, body, buttonLabel, buttonPage, secondaryLabel, secondaryPage }: BigCtaProps) {
  const { navigate } = useNav();
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';
  const px = isMobile ? '24px' : isTablet ? '40px' : '80px';

  return (
    <div style={{ background: 'var(--red)', padding: `${isMobile ? '60px' : '100px'} ${px}`, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: isMobile || isTablet ? 'column' : 'row', alignItems: isMobile || isTablet ? 'flex-start' : 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', gap: isMobile ? '32px' : '60px' }}>
        <h2
          className="reveal-left"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px,7vw,96px)', color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.9 }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
          <p style={{ fontFamily: 'var(--font-sub)', fontSize: isMobile ? '15px' : '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: '320px' }}>{body}</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate(buttonPage)}
              style={{ background: '#fff', color: 'var(--black)', fontSize: '13px', padding: '14px 28px', letterSpacing: '0.07em', textTransform: 'uppercase', fontFamily: 'var(--font-ui)', border: 'none', cursor: 'none', transition: 'all 150ms var(--ease)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'none'; }}
            >
              {buttonLabel}
            </button>
            {secondaryLabel && secondaryPage && (
              <button
                onClick={() => navigate(secondaryPage)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-ui)', letterSpacing: '0.07em', textTransform: 'uppercase', background: 'transparent', color: 'rgba(255,255,255,0.7)', fontSize: '13px', padding: '13px 26px', border: '1px solid rgba(255,255,255,0.3)', cursor: 'none', transition: 'all 150ms var(--ease)' }}
              >
                {secondaryLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';
import { useBreakpoint } from '@/hooks/useBreakpoint';

export default function HomeManifesto() {
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';
  const px = isMobile ? '24px' : isTablet ? '40px' : '80px';

  return (
    <section style={{ padding: `${isMobile ? '64px' : '120px'} ${px}`, borderBottom: '1px solid var(--g200)', background: 'var(--black)', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Quote Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'auto 1fr' : 'auto 1fr auto', 
          gap: isMobile ? '24px' : '40px',
          alignItems: 'start'
        }}>
          {!isMobile && (
            <div className="reveal" style={{
              fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--g400)',
              letterSpacing: '-0.02em', textTransform: 'uppercase',
              writingMode: 'vertical-rl', transform: 'rotate(180deg)',
              lineHeight: 1.5,
              whiteSpace: 'nowrap'
            }}>
              // MANIFESTO · 02 — what we are not
            </div>
          )}
          
          <blockquote className="reveal delay-1" style={{ 
            margin: 0, 
            fontFamily: 'var(--font-display)', 
            fontWeight: 400, 
            fontSize: 'clamp(36px, 5vw, 88px)', 
            lineHeight: 1.05, 
            letterSpacing: '-0.035em', 
            color: 'var(--white)'
          }}>
            {isMobile && (
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--g400)',
                letterSpacing: '-0.02em', textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                // MANIFESTO · 02 — what we are not
              </div>
            )}
            We are not a <span style={{ textDecoration: 'line-through', textDecorationColor: 'var(--red)', textDecorationThickness: '4px', color: 'var(--g500)' }}>casino</span>.{' '}
            We are not a <span style={{ textDecoration: 'line-through', textDecorationColor: 'var(--red)', textDecorationThickness: '4px', color: 'var(--g500)' }}>friendly utility</span>.{' '}
            We are an <span style={{ color: 'var(--red)' }}>arena</span> — and the bracket starts the second you log in.
          </blockquote>

          {!isMobile && !isTablet && (
            <div className="reveal" style={{
              fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--g400)',
              letterSpacing: '-0.02em', textTransform: 'uppercase',
              writingMode: 'vertical-rl', transform: 'rotate(0deg)',
              lineHeight: 1.5,
              whiteSpace: 'nowrap'
            }}>
              EST. 2024 · MUMBAI
            </div>
          )}
        </div>

        {/* Colophon */}
        <div className="reveal delay-2" style={{ 
          marginTop: isMobile ? '40px' : '64px',
          paddingTop: '32px',
          borderTop: '1px solid var(--g200)',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? '24px 16px' : isTablet ? '32px 0' : '0'
        }}>
          
          <div style={{ padding: isMobile ? '0' : '0 24px', borderLeft: isMobile ? 'none' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--g400)', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>Built for</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '17px', letterSpacing: '-0.02em', color: 'var(--white)', marginTop: '6px', lineHeight: 1.25 }}>
              India&apos;s mobile esports.<br/>Android-first, 390 px up.
            </div>
          </div>

          <div style={{ padding: isMobile ? '0' : '0 24px', borderLeft: isMobile ? 'none' : '1px solid var(--g200)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--g400)', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>Operated by</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '17px', letterSpacing: '-0.02em', color: 'var(--white)', marginTop: '6px', lineHeight: 1.25 }}>
              Corpse.ltd<br/>w/ Corpse Campus partners
            </div>
          </div>

          <div style={{ padding: isMobile ? '0' : '0 24px', borderLeft: (isMobile || isTablet) ? 'none' : '1px solid var(--g200)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--g400)', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>Settles in</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '17px', letterSpacing: '-0.02em', color: 'var(--white)', marginTop: '6px', lineHeight: 1.25 }}>
              ₹ INR<br/>UPI · NEFT · IMPS
            </div>
          </div>

          <div style={{ padding: isMobile ? '0' : '0 24px', borderLeft: isMobile ? 'none' : '1px solid var(--g200)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--g400)', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>House rules</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '17px', letterSpacing: '-0.02em', color: 'var(--white)', marginTop: '6px', lineHeight: 1.25 }}>
              Anti-cheat live.<br/>Veterans verified.
            </div>
          </div>

        </div>
        {isMobile && (
          <div className="reveal delay-3" style={{
            fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--g400)',
            letterSpacing: '-0.02em', textTransform: 'uppercase',
            marginTop: '32px', textAlign: 'center'
          }}>
            EST. 2024 · MUMBAI
          </div>
        )}
      </div>
    </section>
  );
}

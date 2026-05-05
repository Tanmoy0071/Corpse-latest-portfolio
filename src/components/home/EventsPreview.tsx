'use client';
import { useNav } from '@/context/NavContext';
import { HOME_EVENTS } from '@/lib/data';
import { useBreakpoint } from '@/hooks/useBreakpoint';

export default function EventsPreview() {
  const { navigate } = useNav();
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';
  const px = isMobile ? '24px' : isTablet ? '40px' : '80px';

  return (
    <section style={{ padding: `${isMobile ? '60px' : '80px'} ${px}`, background: 'var(--g100)', borderTop: '1px solid var(--g200)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header row */}
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', marginBottom: '40px', gap: '20px' }}>
          <div>
            <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--red)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>Schedule</div>
            <h2 className="reveal delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,5vw,56px)', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.92 }}>
              UPCOMING<br />EVENTS
            </h2>
          </div>
          <button
            className="reveal"
            onClick={() => navigate('compete')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-ui)', letterSpacing: '0.07em', textTransform: 'uppercase', background: 'transparent', color: 'var(--white)', fontSize: '13px', padding: '12px 24px', border: '1px solid var(--g300)', cursor: 'none', transition: 'all 150ms var(--ease)', flexShrink: 0 }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--g500)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--g300)'; }}
          >
            View all events
          </button>
        </div>

        {/* Events list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {HOME_EVENTS.map((ev, i) => (
            <div
              key={ev.id}
              className={`reveal ${i > 0 ? `delay-${i}` : ''}`}
              onClick={() => navigate('compete')}
              style={{ display: 'flex', alignItems: 'center', flexWrap: isMobile ? 'wrap' : 'nowrap', gap: isMobile ? '8px' : '24px', padding: isMobile ? '16px' : '20px 24px', background: 'var(--g100)', border: '1px solid var(--g200)', transition: 'background 150ms, border-color 150ms', cursor: 'none' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'var(--g200)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--g300)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'var(--g100)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--g200)'; }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--g400)', letterSpacing: '0.1em', textTransform: 'uppercase', width: isMobile ? '100%' : '120px', flexShrink: 0 }}>{ev.round}</span>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: isMobile ? '14px' : '15px', color: 'var(--white)', flex: 1 }}>{ev.name}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--g400)', flexShrink: 0 }}>{ev.time}</span>
              {ev.live && (
                <span style={{ background: 'var(--red)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0 }}>
                  <span style={{ width: '5px', height: '5px', background: '#fff', borderRadius: '50%', animation: 'blink 1s ease-in-out infinite', display: 'inline-block' }} />
                  Live
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

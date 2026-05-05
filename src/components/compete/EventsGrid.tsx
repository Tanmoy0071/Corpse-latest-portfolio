'use client';
import { EVENTS } from '@/lib/data';
import { useBreakpoint } from '@/hooks/useBreakpoint';

export default function EventsGrid() {
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';
  const px = isMobile ? '24px' : isTablet ? '40px' : '80px';

  const scrollToReg = (name: string) => {
    const panel = document.getElementById('reg-panel');
    const titleEl = document.getElementById('reg-title');
    if (titleEl) titleEl.textContent = 'Register for ' + name;
    panel?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const btnSm: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-ui)',
    letterSpacing: '0.07em', textTransform: 'uppercase', border: 'none',
    fontSize: '11px', padding: '8px 16px', cursor: 'none', transition: 'all 150ms var(--ease)',
  };

  return (
    <section style={{ padding: `${isMobile ? '60px' : '80px'} ${px}`, background: 'var(--black)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--red)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>All events</div>
        <h2 className="reveal delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,5vw,52px)', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.92, marginBottom: '40px' }}>
          OPEN<br />BRACKETS
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2px' }}>
          {EVENTS.map((ev, i) => (
            <div
              key={ev.id}
              className={`ev-card reveal ${i > 0 ? `delay-${Math.min(i, 4)}` : ''} ${ev.live ? 'live' : ''}`}
              style={{ background: 'var(--g100)', border: `1px solid ${ev.live ? 'var(--red)' : 'var(--g200)'}`, padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px', cursor: 'none', position: 'relative', overflow: 'hidden', transition: 'border-color 200ms, transform 200ms var(--ease)' }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'var(--red)'; el.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = ev.live ? 'var(--red)' : 'var(--g200)'; el.style.transform = 'none'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: ev.live ? 'var(--red)' : 'var(--g400)' }}>{ev.round}</span>
                {ev.live && (
                  <span style={{ background: 'var(--red)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '999px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ width: '5px', height: '5px', background: '#fff', borderRadius: '50%', animation: 'blink 1s infinite', display: 'inline-block' }} />
                    Live
                  </span>
                )}
              </div>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', color: 'var(--white)', lineHeight: 1.3 }}>{ev.name}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--g400)' }}>{ev.time}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--g500)' }}>{ev.slots}</span>
              </div>
              <div style={{ paddingTop: '14px', borderTop: '1px solid var(--g200)', display: 'flex', gap: '8px' }}>
                <button onClick={() => scrollToReg(ev.name)} style={{ ...btnSm, background: 'var(--red)', color: '#fff' }}>Register</button>
                {ev.live && <button style={{ ...btnSm, background: 'transparent', color: 'var(--white)', border: '1px solid var(--g300)' }}>Spectate</button>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

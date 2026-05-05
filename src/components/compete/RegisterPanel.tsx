'use client';
import { useState, useCallback } from 'react';

interface RegisterPanelProps {
  initialTitle?: string;
}

export default function RegisterPanel({ initialTitle = 'Register for Winter Invitational' }: RegisterPanelProps) {
  const [title, setTitle] = useState(initialTitle);
  const [handle, setHandle] = useState('');
  const [region, setRegion] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = useCallback(() => {
    if (!handle) { setError('Handle is required.'); return; }
    if (!region) { setError('Please select a region.'); return; }
    if (!email || !email.includes('@')) { setError('Valid email required.'); return; }
    setError('');
    setSuccess(true);
  }, [handle, region, email]);

  const resetReg = useCallback(() => {
    setHandle(''); setRegion(''); setEmail(''); setSuccess(false); setError('');
  }, []);

  const inputStyle: React.CSSProperties = {
    background: 'var(--g200)', border: '1px solid var(--g300)', color: 'var(--white)',
    fontFamily: 'var(--font-ui)', fontSize: '14px', padding: '11px 14px', outline: 'none',
    width: '100%', borderRadius: 0, transition: 'border-color 150ms, box-shadow 150ms',
  };

  return (
    <div id="reg-panel" className="reveal delay-2" style={{ background: 'var(--g100)', border: '1px solid var(--g200)', padding: '40px' }}>
      <div style={{ fontFamily: 'var(--font-brand)', fontSize: '28px', color: 'var(--white)', marginBottom: '8px', fontWeight: 400 }} id="reg-title">{title}</div>
      <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--g400)', lineHeight: 1.6, marginBottom: '28px' }}>
        Season 3 · Round 08 · Open bracket · 128 slots
      </p>

      {!success ? (
        <div id="reg-form">
          {(['handle', 'region', 'email'] as const).map(field => (
            <div key={field} style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
              <label style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--g400)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {field === 'handle' ? 'Your handle' : field === 'region' ? 'Region' : 'Email'}
              </label>
              {field === 'region' ? (
                <select
                  value={region}
                  onChange={e => setRegion(e.target.value)}
                  style={{ ...inputStyle, appearance: 'none', cursor: 'none' }}
                >
                  <option value="">Select region</option>
                  <option>NA — North America</option>
                  <option>EU — Europe</option>
                  <option>APAC — Asia Pacific</option>
                  <option>LATAM — Latin America</option>
                  <option>MENA — Middle East &amp; Africa</option>
                </select>
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  placeholder={field === 'handle' ? 'corps_arena' : 'you@email.com'}
                  value={field === 'handle' ? handle : email}
                  onChange={e => field === 'handle' ? setHandle(e.target.value) : setEmail(e.target.value)}
                  style={inputStyle}
                  onFocus={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.boxShadow = '0 0 0 1px var(--red)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--g300)'; e.currentTarget.style.boxShadow = 'none'; }}
                />
              )}
            </div>
          ))}
          {error && <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--red)', marginBottom: '12px' }}>{error}</div>}
          <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
            <button
              onClick={handleRegister}
              style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-ui)', letterSpacing: '0.07em', textTransform: 'uppercase', border: 'none', background: 'var(--red)', color: '#fff', fontSize: '13px', padding: '14px 28px', cursor: 'none', transition: 'all 150ms var(--ease)' }}
            >
              Register now
            </button>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '48px', color: 'var(--white)', textTransform: 'uppercase', lineHeight: 1, marginBottom: '12px' }}>YOU&apos;RE IN.</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--red)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>Registration confirmed</div>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--g500)', lineHeight: 1.6, marginBottom: '20px' }}>
            Check in 30 minutes before start. We&apos;ll email your bracket details.
          </p>
          <button
            onClick={resetReg}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-ui)', letterSpacing: '0.07em', textTransform: 'uppercase', background: 'transparent', color: 'var(--white)', fontSize: '13px', padding: '13px 26px', border: '1px solid var(--g300)', cursor: 'none' }}
          >
            Register another
          </button>
        </div>
      )}
    </div>
  );
}

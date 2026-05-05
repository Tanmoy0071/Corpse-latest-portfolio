'use client';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { useNav } from '@/context/NavContext';
import { useState } from 'react';
import CountUp from '@/components/ui/CountUp';

const LADDER_DATA = [
  { rank: '01', av: '/assets/profile-bgmi.jpg', handle: 'kunaldeb', hash: '0001', sub: 'Timeout Esports · Captain', elo: '2,847', winnings: '₹ 3,58,920' },
  { rank: '02', av: '/assets/team-thumb.png', handle: 'vipersn1pe', hash: '0042', sub: 'Godlike Esports · Sniper', elo: '2,612', winnings: '₹ 2,14,500' },
  { rank: '03', av: '/assets/match-hero-3.png', handle: '0xravenrb', hash: '0119', sub: 'Corpse Campus · MVP', elo: '2,498', winnings: '₹ 1,87,300' },
  { rank: '04', av: '/assets/match-hero-2.png', handle: 'diyabolt', hash: '0207', sub: 'Indep. · Assault', elo: '2,381', winnings: '₹ 1,42,100' },
  { rank: '05', av: '/assets/championship-icon.png', bgSize: '80%', bgCol: '#1B1B1B', handle: 'zenith.arn', hash: '0314', sub: 'Zenith Guild · Veteran', elo: '2,290', winnings: '₹ 1,18,640' },
];

function LadderRow({ item, isHead = false }: { item?: any; isHead?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  
  const gridCols = isMobile ? '40px 32px 1fr' : '60px 36px 1fr auto auto';
  const px = isMobile ? '24px' : '40px';

  if (isHead) {
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: gridCols,
        alignItems: 'center',
        gap: isMobile ? '12px' : '18px',
        padding: `16px ${px} 16px ${isMobile ? '24px' : '24px'}`,
        borderBottom: '1px solid #2B2A2A',
        background: 'transparent',
        pointerEvents: 'none',
      }}>
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '9.5px', color: '#7E7E7E', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>RANK</span>
        <span></span>
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '9.5px', color: '#7E7E7E', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>HANDLE / TEAM</span>
        {!isMobile && <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '9.5px', color: '#7E7E7E', letterSpacing: '-0.02em', textTransform: 'uppercase', textAlign: 'right' }}>ELO</span>}
        {!isMobile && <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '9.5px', color: '#7E7E7E', letterSpacing: '-0.02em', textTransform: 'uppercase', textAlign: 'right' }}>WINNINGS</span>}
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: gridCols,
        alignItems: 'center',
        gap: isMobile ? '12px' : '18px',
        padding: `18px ${px} 18px ${isMobile ? '24px' : '24px'}`,
        borderBottom: '1px solid #2B2A2A',
        background: hovered ? '#161616' : 'transparent',
        transition: 'background .15s',
        cursor: 'none',
      }}
    >
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: isMobile ? '24px' : '32px', letterSpacing: '-0.04em', color: item.rank === '01' ? '#FF0000' : '#fff', lineHeight: 1 }}>{item.rank}</span>
      <span style={{
        width: isMobile ? '32px' : '36px',
        height: isMobile ? '32px' : '36px',
        borderRadius: '4px',
        background: `url(${item.av}) center/cover no-repeat`,
        backgroundColor: item.bgCol || '#1B1B1B',
        backgroundSize: item.bgSize || 'cover',
      }}></span>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: isMobile ? '15px' : '17px', letterSpacing: '-0.03em', color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          <span style={{ color: '#FF0000' }}>#</span>{item.handle} <span style={{ color: '#7E7E7E', fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', fontWeight: 400 }}>{item.hash}</span>
        </div>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10.5px', color: '#7E7E7E', letterSpacing: '-0.02em', textTransform: 'uppercase', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.sub}</div>
      </div>
      {!isMobile && (
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontWeight: 500, fontSize: '14px', letterSpacing: '-0.03em', color: '#fff', textAlign: 'right' }}>
          {item.elo} <small style={{ color: '#7E7E7E', fontWeight: 400, fontSize: '10.5px', marginLeft: '4px' }}>ELO</small>
        </span>
      )}
      {!isMobile && (
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontWeight: 500, fontSize: '14px', letterSpacing: '-0.03em', color: '#FF0000', textAlign: 'right', minWidth: '110px' }}>
          {item.winnings}
        </span>
      )}
    </div>
  );
}

export default function TopLadderPreview() {
  const { navigate } = useNav();
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';
  const px = isMobile ? '24px' : isTablet ? '40px' : '80px';

  return (
    <section style={{ padding: `96px 0 0 0`, borderBottom: '1px solid #2B2A2A', background: 'var(--black)' }}>
      {/* Section header */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr auto',
        alignItems: 'end',
        gap: isMobile ? '16px' : '32px',
        paddingBottom: '48px',
        borderBottom: '1px solid #2B2A2A',
        marginBottom: '64px',
        paddingLeft: px,
        paddingRight: px,
      }}>
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: '#7E7E7E', letterSpacing: '-0.02em', textTransform: 'uppercase', alignSelf: 'start' }}>
          <b style={{ color: '#FF0000', fontWeight: 400 }}>// 03</b><br />Ladder
        </span>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(40px, 7vw, 100px)', lineHeight: 0.92, letterSpacing: '-0.04em', textTransform: 'uppercase', color: '#fff' }}>
          The Veterans,{' '}
          <em style={{ fontStyle: 'normal', fontFamily: 'var(--font-sub)', fontWeight: 300, color: '#7E7E7E', letterSpacing: '-0.02em', textTransform: 'none' }}>
            top 5 this week.
          </em>
        </h2>
        {!isMobile && (
          <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: '#7E7E7E', letterSpacing: '-0.02em', textTransform: 'uppercase', textAlign: 'right' }}>
            Reset <b style={{ color: '#fff', fontWeight: 500 }}>SUN 00:00 IST</b><br />
            <button onClick={() => navigate('roster')} style={{ background: 'none', border: 'none', color: '#FF0000', fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', letterSpacing: '-0.02em', textTransform: 'uppercase', cursor: 'none', padding: 0 }}>
              full top 100 →
            </button>
          </span>
        )}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile || isTablet ? '1fr' : '1.1fr 2fr',
        gap: 0,
        borderTop: '1px solid #2B2A2A',
      }}>
        {/* Left Side */}
        <div style={{
          padding: isMobile || isTablet ? `40px ${px}` : `40px ${px} 40px ${px}`,
          borderRight: isMobile || isTablet ? 'none' : '1px solid #2B2A2A',
          borderBottom: isMobile || isTablet ? '1px solid #2B2A2A' : 'none',
          background: 'var(--black)',
        }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(120px, 22vw, 320px)', lineHeight: 0.82, letterSpacing: '-0.04em', color: '#FF0000' }}>
            <CountUp target={100} style={{ color: 'inherit' }} />
            <small style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '13px', color: '#7E7E7E', letterSpacing: '-0.02em', textTransform: 'uppercase', display: 'block', marginTop: '12px' }}>
              // players · top of ladder
            </small>
          </div>
          <p style={{ fontFamily: 'var(--font-sub)', fontWeight: 300, fontSize: '18px', lineHeight: 1.45, color: '#fff', marginTop: '24px', maxWidth: '36ch' }}>
            Climb the bracket weekly. Your tag, your shard, your ELO — broadcast across the campus network.
          </p>
          <div style={{ marginTop: '32px', fontFamily: '"JetBrains Mono", monospace', fontSize: '10.5px', color: '#7E7E7E', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
            Ladder season <b style={{ color: '#fff', fontWeight: 500 }}>S04 · WK 18</b><br />
            Snapshot taken <b style={{ color: '#fff', fontWeight: 500 }}>02 MAY · 23:00 IST</b>
          </div>
        </div>

        {/* Right Side List */}
        <div style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
          <LadderRow isHead={true} />
          {LADDER_DATA.map((item, i) => (
            <LadderRow key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

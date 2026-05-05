'use client';
import { useState, useMemo } from 'react';
import { ROSTER, ROSTER_STATS } from '@/lib/data';
import CountUp from '@/components/ui/CountUp';
import { useBreakpoint } from '@/hooks/useBreakpoint';

const FILTERS = ['All', 'NA', 'EU', 'APAC'];

export default function RosterTable() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';
  const px = isMobile ? '24px' : isTablet ? '40px' : '80px';

  const data = useMemo(() => {
    return ROSTER.filter(r => {
      const matchRegion = filter === 'All' || r.region === filter;
      const q = search.toLowerCase();
      const matchSearch = !q || r.name.toLowerCase().includes(q) || r.handle.includes(q);
      return matchRegion && matchSearch;
    });
  }, [search, filter]);

  const inputStyle: React.CSSProperties = {
    background: 'var(--g100)', border: '1px solid var(--g200)', color: 'var(--white)',
    fontFamily: 'var(--font-ui)', fontSize: '13px', padding: '10px 14px',
    outline: 'none', width: isMobile ? '100%' : '240px', borderRadius: 0,
  };

  const rankIcons = ['①', '②', '③'];

  const statusStyle = (status: string): React.CSSProperties => {
    if (status === 'live') return { background: 'var(--red)', color: '#fff', border: 'none' };
    if (status === 'active') return { background: 'transparent', color: '#2ECC71', border: '1px solid #2ECC71' };
    return { background: 'transparent', color: 'var(--g500)', border: '1px solid var(--g300)' };
  };

  return (
    <section style={{ padding: `140px ${px} 60px` }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: isMobile || isTablet ? 'column' : 'row', alignItems: isMobile || isTablet ? 'flex-start' : 'flex-end', justifyContent: 'space-between', marginBottom: '40px', gap: '24px' }}>
          <div>
            <div className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--red)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>Season 3 · Live standings</div>
            <h1 className="reveal delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px,7vw,88px)', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.92 }}>
              GLOBAL<br />ROSTER
            </h1>
          </div>

          {/* Search + Filters */}
          <div className="reveal" style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '2px', alignItems: 'stretch', width: isMobile ? '100%' : 'auto', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="Search competitors…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={inputStyle}
              onFocus={e => { e.currentTarget.style.borderColor = 'var(--red)'; }}
              onBlur={e => { e.currentTarget.style.borderColor = 'var(--g200)'; }}
            />
            <div style={{ display: 'flex', gap: '2px', flexWrap: 'wrap' }}>
              {FILTERS.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    background: filter === f ? 'var(--red)' : 'var(--g100)',
                    border: `1px solid ${filter === f ? 'var(--red)' : 'var(--g200)'}`,
                    color: filter === f ? '#fff' : 'var(--g500)',
                    fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em',
                    textTransform: 'uppercase', padding: '10px 14px', cursor: 'none', transition: 'all 150ms',
                    flex: isMobile ? 1 : 'none',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '2px', marginBottom: '32px' }}>
          {ROSTER_STATS.map((stat, i) => (
            <div key={i} style={{ background: 'var(--g100)', border: '1px solid var(--g200)', padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <CountUp target={stat.count} style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: i === 0 ? 'var(--red)' : 'var(--white)', lineHeight: 1 }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--g400)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Table — horizontally scrollable on mobile */}
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: isMobile ? '600px' : 'auto' }}>
            <thead>
              <tr>
                {['Rank', '', 'Competitor', 'Score', 'Wins', !isMobile ? 'Region' : null, 'Delta', 'Status'].filter(Boolean).map((h, i) => (
                  <th key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--g400)', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--g300)' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(r => (
                <tr
                  key={r.rank}
                  style={{ transition: 'background 150ms', cursor: 'none' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLTableRowElement).querySelectorAll('td').forEach(td => { td.style.background = 'var(--g100)'; });
                    (e.currentTarget as HTMLTableRowElement).querySelector<HTMLElement>('.rt-name')!.style.color = 'var(--red)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLTableRowElement).querySelectorAll('td').forEach(td => { td.style.background = ''; });
                    (e.currentTarget as HTMLTableRowElement).querySelector<HTMLElement>('.rt-name')!.style.color = 'var(--white)';
                  }}
                >
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--g200)', verticalAlign: 'middle' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: r.rank <= 3 ? 'var(--red)' : 'var(--g400)' }}>
                      {r.rank <= 3 ? rankIcons[r.rank - 1] : `#${r.rank}`}
                    </span>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--g200)', verticalAlign: 'middle' }}>
                    <div style={{ width: '32px', height: '32px', background: 'var(--g200)', border: '1px solid var(--g300)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '16px', color: 'var(--g400)' }}>
                      {r.name[0]}
                    </div>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--g200)', verticalAlign: 'middle' }}>
                    <div className="rt-name" style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--white)', transition: 'color 150ms', whiteSpace: 'nowrap' }}>{r.name}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--g400)' }}>{r.handle}</div>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--g200)', verticalAlign: 'middle' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--white)' }}>{r.score.toLocaleString()}</span>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--g200)', verticalAlign: 'middle' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--g500)' }}>{r.wins}</span>
                  </td>
                  {!isMobile && (
                    <td style={{ padding: '12px', borderBottom: '1px solid var(--g200)', verticalAlign: 'middle' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--g500)' }}>{r.region}</span>
                    </td>
                  )}
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--g200)', verticalAlign: 'middle' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: r.delta > 0 ? '#2ECC71' : 'var(--red)' }}>
                      {r.delta > 0 ? `+${r.delta}` : r.delta}
                    </span>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid var(--g200)', verticalAlign: 'middle' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 9px', borderRadius: '999px', ...statusStyle(r.status) }}>
                      {r.status === 'live' && <span style={{ width: '5px', height: '5px', background: '#fff', borderRadius: '50%', animation: 'blink 1s infinite', display: 'inline-block' }} />}
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

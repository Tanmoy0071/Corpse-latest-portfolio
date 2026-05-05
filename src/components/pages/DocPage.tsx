'use client';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { useNav } from '@/context/NavContext';
import type { ReactNode } from 'react';

interface DocShellProps {
  title: string;
  tag: string;
  subtitle: string;
  version?: string;
  effectiveDate?: string;
  lastUpdated?: string;
  children: ReactNode;
}

/** Styled table component matching the site's design */
export function DocTable({ rows }: { rows: (string | ReactNode)[][] }) {
  return (
    <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          border: '1px solid rgba(232,25,44,0.2)',
          background: 'var(--g100)',
        }}
      >
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  style={{
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '10px 14px',
                    fontFamily: 'var(--font-sub)',
                    fontSize: '14px',
                    color: 'var(--g500)',
                    lineHeight: 1.6,
                    verticalAlign: 'top',
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Styled bulleted list */
export function DocList({ items, ordered }: { items: ReactNode[]; ordered?: boolean }) {
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <Tag
      style={{
        paddingLeft: '20px',
        margin: '0 0 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        background: 'var(--g100)',
        padding: '20px 20px 20px 36px',
        borderLeft: '3px solid var(--red)',
        marginBottom: '24px',
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{ fontFamily: 'var(--font-sub)', fontSize: '14px', color: 'var(--g500)', lineHeight: 1.7 }}
        >
          {item}
        </li>
      ))}
    </Tag>
  );
}

/** Styled section heading */
export function DocH2({ children }: { children: ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(18px, 3vw, 24px)',
        color: 'var(--white)',
        textTransform: 'uppercase',
        letterSpacing: '-0.02em',
        margin: '48px 0 16px',
        paddingBottom: '10px',
        borderBottom: '1px solid var(--g200)',
      }}
    >
      {children}
    </h2>
  );
}

export function DocH3({ children }: { children: ReactNode }) {
  return (
    <h3
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(15px, 2.5vw, 18px)',
        color: 'var(--white)',
        textTransform: 'uppercase',
        letterSpacing: '-0.01em',
        margin: '32px 0 12px',
      }}
    >
      {children}
    </h3>
  );
}

export function DocP({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-sub)',
        fontSize: '14px',
        color: 'var(--g500)',
        lineHeight: 1.75,
        margin: '0 0 16px',
      }}
    >
      {children}
    </p>
  );
}

export function DocStrong({ children }: { children: ReactNode }) {
  return <strong style={{ color: 'var(--white)', fontWeight: 600 }}>{children}</strong>;
}

export function DocEm({ children }: { children: ReactNode }) {
  return <em style={{ color: 'var(--g400)', fontStyle: 'italic' }}>{children}</em>;
}

export function DocLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} style={{ color: 'var(--red)', textDecoration: 'none' }}>
      {children}
    </a>
  );
}

/** Info callout box */
export function DocNote({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        background: 'var(--g100)',
        border: '1px solid var(--g200)',
        borderLeft: '3px solid var(--red)',
        padding: '14px 18px',
        margin: '0 0 24px',
        fontFamily: 'var(--font-sub)',
        fontSize: '14px',
        color: 'var(--g400)',
        lineHeight: 1.7,
      }}
    >
      {children}
    </div>
  );
}

/** Main shell used by every doc page */
export default function DocShell({ tag, title, subtitle, version, effectiveDate, lastUpdated, children }: DocShellProps) {
  const bp = useBreakpoint();
  const { navigate } = useNav();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';
  const px = isMobile ? '24px' : isTablet ? '40px' : '80px';

  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh' }}>
      {/* Hero banner */}
      <div
        style={{
          position: 'relative',
          padding: `120px ${px} 60px`,
          borderBottom: '1px solid var(--g200)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(232,25,26,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--red)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span style={{ width: '24px', height: '1px', background: 'var(--red)', display: 'inline-block' }} />
            {tag}
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: isMobile ? 'clamp(36px, 9vw, 56px)' : 'clamp(48px, 6vw, 80px)',
              color: 'var(--white)',
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              lineHeight: 0.9,
              margin: '0 0 20px',
            }}
          >
            {title}
          </h1>

          <p style={{ fontFamily: 'var(--font-sub)', fontSize: '15px', color: 'var(--g400)', lineHeight: 1.6, maxWidth: '520px', margin: '0 0 16px' }}>
            {subtitle}
          </p>

          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {version && (
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--g300)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Version {version}
              </span>
            )}
            {effectiveDate && (
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--g300)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Effective: {effectiveDate}
              </span>
            )}
            {lastUpdated && (
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--g300)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Updated: {lastUpdated}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content area */}
      <div
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          padding: `52px ${px} 80px`,
        }}
      >
        {children}
      </div>

      {/* Back nav */}
      <div style={{ borderTop: '1px solid var(--g200)', padding: `24px ${px}` }}>
        <button
          onClick={() => navigate('home')}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--g400)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            background: 'none',
            border: 'none',
            cursor: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'color 150ms',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--g400)')}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

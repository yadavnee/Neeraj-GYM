"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="navbar-container" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 8%',
      background: 'var(--bg-glass)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="logo" style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '1.8rem',
        fontWeight: 900,
        letterSpacing: '2px'
      }}>
        <Link href="/">
          NEERAJ <span className="text-glow-red" style={{ color: 'var(--accent-neon-red)' }}>GYM</span>
        </Link>
      </div>
      <div className="nav-links" style={{
        display: 'flex',
        gap: '32px',
        fontWeight: 600,
        fontSize: '0.95rem'
      }}>
        <Link href="/about" style={{ color: pathname === '/about' ? 'var(--accent-neon-red)' : 'inherit', textTransform: 'uppercase', letterSpacing: '1px' }}>About</Link>
        <Link href="/services" style={{ color: pathname === '/services' ? 'var(--accent-neon-red)' : 'inherit', textTransform: 'uppercase', letterSpacing: '1px' }}>Services</Link>
        <Link href="/trainers" style={{ color: pathname === '/trainers' ? 'var(--accent-neon-red)' : 'inherit', textTransform: 'uppercase', letterSpacing: '1px' }}>Trainers</Link>
        <Link href="/pricing" style={{ color: pathname === '/pricing' ? 'var(--accent-neon-red)' : 'inherit', textTransform: 'uppercase', letterSpacing: '1px' }}>Plans</Link>
        <Link href="/ai-coach" className="text-glow-blue" style={{ color: 'var(--accent-electric-blue)', textTransform: 'uppercase', letterSpacing: '1px' }}>AI Coach</Link>
      </div>
      <div className="nav-actions" style={{ display: 'flex', gap: '16px' }}>
        <button className="btn-outline">Log In</button>
        <button className="btn-primary">Join Now</button>
      </div>
    </nav>
  );
}

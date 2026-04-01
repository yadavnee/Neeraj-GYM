import React from 'react';
import { getSession } from '../../lib/actions';
import { redirect } from 'next/navigation';
import prisma from '../../lib/prisma';
import Link from 'next/link';
import type { Booking } from '@prisma/client';

export default async function DashboardPage() {
  const sessionUser = await getSession();
  if (!sessionUser) {
    redirect('/login');
  }

  // Fetch bookings for this user
  const bookings = await prisma.booking.findMany({
    where: { userId: sessionUser.id },
    orderBy: { date: 'asc' }
  });

  return (
    <div style={{ padding: '80px 8%', minHeight: 'calc(100vh - 90px)' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '40px' }}>
        WELCOME, <span className="text-glow-blue" style={{ textTransform: 'uppercase', color: 'var(--accent-electric-blue)' }}>{sessionUser.name}</span>
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        <div className="glass-panel" style={{ padding: '30px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent-neon-red)' }}>YOUR SESSIONS</h3>
          {bookings.length > 0 ? (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {bookings.map((b: Booking) => (
                <li key={b.id} style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', marginBottom: '8px', borderRadius: '8px', borderLeft: '4px solid var(--accent-electric-blue)' }}>
                  <strong>{b.className}</strong>
                  <br />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{new Date(b.date).toLocaleDateString()} - {b.status}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ color: 'var(--text-secondary)' }}>No active sessions found.</p>
          )}
          <Link href="/trainers">
            <button className="btn-outline" style={{ marginTop: '20px', width: '100%', fontSize: '0.8rem' }}>BOOK NEW SESSION</button>
          </Link>
        </div>

        <div className="glass-panel" style={{ padding: '30px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent-purple)' }}>AI WORKOUT PLANS</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>Access your personalized neural generation.</p>
          <Link href="/ai-coach">
            <button className="btn-primary" style={{ width: '100%' }}>LAUNCH PLANNER</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

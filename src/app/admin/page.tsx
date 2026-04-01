import React from 'react';
import { getSession } from '../../lib/actions';
import { redirect } from 'next/navigation';
import prisma from '../../lib/prisma';

export default async function AdminPage() {
  const sessionUser = await getSession();
  if (!sessionUser || sessionUser.role !== 'ADMIN') {
    // If not admin, redirect. For testing purposes, you can change role in the DB to ADMIN.
    redirect('/dashboard');
  }

  const allUsers = await prisma.user.findMany();
  const totalBookings = await prisma.booking.count();

  return (
    <div style={{ padding: '80px 8%', minHeight: 'calc(100vh - 90px)' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '40px' }}>
        SYSTEM <span className="text-glow-red" style={{ color: 'var(--accent-neon-red)' }}>OVERRIDE</span> (ADMIN)
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '60px' }}>
        <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', color: 'var(--accent-electric-blue)' }}>{allUsers.length}</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Total Registered Entities</p>
        </div>
        <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', color: 'var(--accent-neon-red)' }}>{totalBookings}</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Active Training Sessions</p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '30px', overflowX: 'auto' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>USER DIRECTORY</h3>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <th style={{ padding: '12px' }}>ID</th>
              <th style={{ padding: '12px' }}>Name</th>
              <th style={{ padding: '12px' }}>Email</th>
              <th style={{ padding: '12px' }}>Role</th>
              <th style={{ padding: '12px' }}>Joined</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((u: any) => (
              <tr key={u.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '12px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>...{u.id.slice(-6)}</td>
                <td style={{ padding: '12px', fontWeight: 600 }}>{u.name || 'Unknown'}</td>
                <td style={{ padding: '12px' }}>{u.email}</td>
                <td style={{ padding: '12px', color: u.role === 'ADMIN' ? 'var(--accent-neon-red)' : 'var(--text-primary)' }}>{u.role}</td>
                <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>{new Date(u.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

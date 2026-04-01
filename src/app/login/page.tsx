"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser, registerUser } from '../../lib/actions';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    const formData = new FormData(e.currentTarget);
    
    const res = isLogin ? await loginUser(formData) : await registerUser(formData);
    
    if (res?.error) {
      setError(res.error);
    } else {
      router.push('/dashboard');
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 90px)', padding: '40px' }}>
      <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '40px', width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '20px' }}>
          {isLogin ? 'ACCESS ' : 'JOIN '}
          <span className="text-glow-blue" style={{ color: 'var(--accent-electric-blue)' }}>PORTAL</span>
        </h2>

        {error && <div style={{ color: 'var(--accent-neon-red)', textAlign: 'center', padding: '10px', background: 'rgba(255, 51, 102, 0.1)', borderRadius: '8px' }}>{error}</div>}

        {!isLogin && (
          <input name="name" type="text" placeholder="Full Name" required style={{ width: '100%', padding: '14px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--accent-electric-blue)', color: 'white', borderRadius: '8px', outline: 'none' }} />
        )}
        <input name="email" type="email" placeholder="Email Address" required style={{ width: '100%', padding: '14px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--accent-electric-blue)', color: 'white', borderRadius: '8px', outline: 'none' }} />
        <input name="password" type="password" placeholder="Password" required style={{ width: '100%', padding: '14px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--accent-electric-blue)', color: 'white', borderRadius: '8px', outline: 'none' }} />
        
        <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>{isLogin ? 'INITIATE LOGIN' : 'CREATE ACCOUNT'}</button>
        
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '20px', cursor: 'pointer' }} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an ID? Register." : 'Already a member? Login.'}
        </p>
      </form>
    </div>
  );
}

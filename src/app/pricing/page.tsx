"use client";
import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  { name: 'Starter', price: '$49/mo', features: ['General Access', '1 AI Plan/mo', 'Basic App Access'], color: 'var(--text-primary)' },
  { name: 'Pro', price: '$99/mo', features: ['24/7 Access', 'Unlimited AI Plans', 'Recovery Lab'], color: 'var(--accent-electric-blue)', popular: true },
  { name: 'Elite', price: '$199/mo', features: ['Personal Trainer', 'Nutrition Meals', 'VIP Locker'], color: 'var(--accent-gold)' },
];

export default function PricingPage() {
  return (
    <div style={{ padding: '80px 8%', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '20px' }}>
        MEMBERSHIP <span className="text-glow-red" style={{ color: 'var(--accent-neon-red)' }}>PLANS</span>
      </h1>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '60px' }}>Choose the tier that matches your goals.</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px' }}>
        {plans.map((p, i) => (
          <motion.div 
            key={i}
            className="glass-panel"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            style={{ 
              width: '320px', 
              padding: '40px', 
              textAlign: 'center',
              border: p.popular ? '2px solid var(--accent-electric-blue)' : undefined,
              boxShadow: p.popular ? '0 0 20px rgba(0, 240, 255, 0.2)' : undefined
            }}
          >
            {p.popular && <span style={{ background: 'var(--accent-electric-blue)', color: '#000', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '20px', display: 'inline-block' }}>MOST POPULAR</span>}
            <h3 style={{ fontSize: '2rem', color: p.color, marginBottom: '16px' }}>{p.name}</h3>
            <div style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '32px' }}>{p.price}</div>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px', textAlign: 'left' }}>
              {p.features.map((f, j) => (
                <li key={j} style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-secondary)' }}>
                  ✓ {f}
                </li>
              ))}
            </ul>
            <button className={p.popular ? 'btn-primary' : 'btn-outline'} style={{ width: '100%' }}>SELECT PLAN</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

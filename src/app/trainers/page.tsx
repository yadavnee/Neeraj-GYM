"use client";
import React from 'react';
import { motion } from 'framer-motion';

const trainers = [
  { name: 'Neeraj', role: 'Head Coach & Founder', ext: 'Strength & Conditioning', badge: 'PRO' },
  { name: 'Aria Spark', role: 'HIIT Specialist', ext: 'Agility & Speed', badge: 'MASTER' },
  { name: 'Zane Cyber', role: 'Biomechanics Expert', ext: 'Recovery & Posture', badge: 'ELITE' },
  { name: 'Nova Flow', role: 'Yoga & Flexibility', ext: 'Mindfulness', badge: 'PRO' },
];

export default function TrainersPage() {
  return (
    <div style={{ padding: '80px 8%', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '20px' }}>
        MEET YOUR <span className="text-glow-red" style={{ color: 'var(--accent-neon-red)' }}>MASTERS</span>
      </h1>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '60px' }}>Trained professionals ready to rebuild you.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
        {trainers.map((t, i) => (
          <motion.div 
            key={i}
            className="glass-panel"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, boxShadow: '0 0 30px rgba(255,51,102,0.3)', borderColor: 'var(--accent-neon-red)' }}
            style={{ padding: '30px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'var(--accent-neon-red)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 900 }}>
              {t.badge}
            </div>
            {/* Placeholder for trainer image */}
            <div style={{ width: '120px', height: '120px', background: 'linear-gradient(45deg, #111, #333)', borderRadius: '50%', margin: '0 auto 20px auto', border: '2px solid var(--accent-neon-red)' }} />
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{t.name}</h3>
            <p style={{ color: 'var(--accent-electric-blue)', fontWeight: 700, marginBottom: '8px' }}>{t.role}</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Focus: {t.ext}</p>
            <button className="btn-outline" style={{ marginTop: '24px', width: '100%', fontSize: '0.85rem' }}>BOOK SESSION</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Activity, Shield, Cpu } from 'lucide-react';

const services = [
  { title: 'Elite Training', desc: 'Work with the top 1% of fitness professionals.', icon: <Dumbbell size={40} color="var(--accent-neon-red)" /> },
  { title: 'Smart Tracking', desc: 'Real-time 3D motion capture and analytics.', icon: <Activity size={40} color="var(--accent-electric-blue)" /> },
  { title: 'Recovery Lab', desc: 'Cryotherapy, saunas, and sports massages.', icon: <Shield size={40} color="var(--accent-purple)" /> },
  { title: 'AI Coach', desc: 'Personalized plans powered by our neural network.', icon: <Cpu size={40} color="var(--accent-gold)" /> },
];

export default function ServicesPage() {
  return (
    <div style={{ padding: '80px 8%', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '60px' }}>
        OUR <span className="text-glow-blue" style={{ color: 'var(--accent-electric-blue)' }}>SERVICES</span>
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        {services.map((s, i) => (
          <motion.div 
            key={i}
            className="glass-panel"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, borderColor: 'var(--accent-electric-blue)' }}
            style={{ padding: '40px 24px', textAlign: 'center', cursor: 'pointer' }}
          >
            <div style={{ marginBottom: '20px' }}>{s.icon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{s.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

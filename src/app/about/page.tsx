"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div style={{ padding: '100px 8%', minHeight: '100vh', position: 'relative' }}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={{ fontSize: '4rem', marginBottom: '24px' }}>
          OUR <span className="text-glow-red" style={{ color: 'var(--accent-neon-red)' }}>STORY</span>
        </h1>
        <div className="glass-panel" style={{ padding: '40px', maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--accent-electric-blue)', marginBottom: '16px' }}>The Core of Neeraj Gym</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
            Founded in 2026, Neeraj Gym revolutionizes the fitness industry by combining elite equipment, immersive 3D technology, and hyper-personalized AI Coaching. 
            We cater to the modern generation, offering a premium, dark-themed, and energetic environment where fitness meets the future. 
            Join our community to break your limits.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

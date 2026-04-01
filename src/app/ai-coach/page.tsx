"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AICoachPage() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
    else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setResult({
          program: "Cybertrophy Core Builder",
          duration: "12 Weeks",
          focus: "Muscle Hypertrophy & Fat Burn",
          split: ["Day 1: Upper Kinetic", "Day 2: Lower Override", "Day 3: Active Recovery", "Day 4: Neural Hypertrophy", "Day 5: Full Body Sprint"]
        });
      }, 3000);
    }
  };

  return (
    <div style={{ padding: '80px 8%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '10px' }}>
        <span className="text-glow-blue" style={{ color: 'var(--accent-electric-blue)' }}>NEURAL</span> COACH
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>Generate your hyper-personalized fitness matrix.</p>
      
      <div className="glass-panel" style={{ width: '100%', maxWidth: '600px', padding: '40px', position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          {!result && !loading && step === 0 && (
            <motion.div key="step0" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Select Body Goal</h3>
              <select style={{ width: '100%', padding: '16px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--accent-electric-blue)', color: 'white', fontSize: '1.2rem', borderRadius: '8px', marginBottom: '30px', outline: 'none' }}>
                <option>Muscle Gain (Hypertrophy)</option>
                <option>Fat Loss (Cutting)</option>
                <option>Endurance (Stamina)</option>
                <option>Body Recomposition</option>
              </select>
              <button className="btn-primary" onClick={handleNext} style={{ width: '100%' }}>NEXT PHASE</button>
            </motion.div>
          )}

          {!result && !loading && step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Current Fitness Level</h3>
              <select style={{ width: '100%', padding: '16px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--accent-electric-blue)', color: 'white', fontSize: '1.2rem', borderRadius: '8px', marginBottom: '30px', outline: 'none' }}>
                <option>Novice</option>
                <option>Intermediate</option>
                <option>Advanced Athlete</option>
                <option>Cybernetic Commando</option>
              </select>
              <button className="btn-primary" onClick={handleNext} style={{ width: '100%' }}>NEXT PHASE</button>
            </motion.div>
          )}

          {!result && !loading && step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Preferred Days / Week</h3>
              <input type="range" min="2" max="6" defaultValue="4" style={{ width: '100%', marginBottom: '30px', accentColor: 'var(--accent-neon-red)' }} />
              <button className="btn-primary" onClick={handleNext} style={{ width: '100%', background: 'linear-gradient(135deg, var(--accent-electric-blue), var(--accent-purple))' }}>INITIALIZE AI GENERATION</button>
            </motion.div>
          )}

          {loading && (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '40px 0' }}>
              <motion.div 
                animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ width: '60px', height: '60px', border: '4px solid transparent', borderTop: '4px solid var(--accent-neon-red)', borderBottom: '4px solid var(--accent-electric-blue)', borderRadius: '50%', margin: '0 auto 20px auto' }}
              />
              <h3 style={{ color: 'var(--accent-electric-blue)' }}>Computing your optimal matrix...</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Analyzing muscle pathways and recovery variables.</p>
            </motion.div>
          )}

          {result && (
            <motion.div key="result" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <h2 className="text-glow-red" style={{ color: 'var(--accent-neon-red)', marginBottom: '10px' }}>PLAN GENERATED</h2>
              <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>{result.program}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '10px' }}><strong>Duration:</strong> {result.duration}</p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}><strong>Focus:</strong> {result.focus}</p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                {result.split.map((day: string, idx: number) => (
                  <li key={idx} style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', marginBottom: '8px', borderRadius: '4px', borderLeft: '4px solid var(--accent-purple)' }}>{day}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: '16px' }}>
                <button className="btn-primary" style={{ flex: 1 }}>SAVE TO DASHBOARD</button>
                <button className="btn-outline" onClick={() => { setStep(0); setResult(null); }}>REGENERATE</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

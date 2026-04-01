"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{sender: 'user' | 'ai', text: string}[]>([
    { sender: 'ai', text: "Welcome to Neeraj Gym's Neural Network. Ask me about training, nutrition, or memberships." }
  ]);
  const [input, setInput] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: 'ai', 
        text: "I've processed your query. As an AI coach, I recommend combining hyper-focused workouts with our elite recovery lab. Check our Services page!" 
      }]);
    }, 1000);
  };

  if (!mounted) return null;

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--accent-neon-red), var(--accent-purple))',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          boxShadow: '0 0 20px rgba(255,51,102,0.5)',
          zIndex: 999
        }}
        className={isOpen ? '' : 'neon-border'}
      >
        <MessageSquare size={28} color="white" />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            style={{
              position: 'fixed',
              bottom: '100px',
              right: '30px',
              width: '350px',
              height: '500px',
              background: 'var(--bg-glass)',
              backdropFilter: 'blur(30px)',
              border: '1px solid var(--accent-electric-blue)',
              borderRadius: '16px',
              boxShadow: '0 10px 40px rgba(0,240,255,0.2)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            <div style={{ padding: '16px', background: 'rgba(0,0,0,0.4)', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--accent-electric-blue)' }}>AI COACH</h3>
              <X size={24} color="var(--text-secondary)" cursor="pointer" onClick={() => setIsOpen(false)} />
            </div>

            <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {messages.map((m, i) => (
                <div key={i} style={{ 
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  background: m.sender === 'user' ? 'rgba(0,240,255,0.1)' : 'rgba(255,51,102,0.1)',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: `1px solid ${m.sender === 'user' ? 'var(--accent-electric-blue)' : 'var(--accent-neon-red)'}`,
                  maxWidth: '80%',
                  fontSize: '0.9rem',
                  lineHeight: '1.5'
                }}>
                  {m.text}
                </div>
              ))}
            </div>

            <div style={{ padding: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '8px' }}>
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder="Ask me anything..." 
                style={{ flex: 1, background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '12px', borderRadius: '8px', outline: 'none' }} 
              />
              <button onClick={sendMessage} style={{ background: 'var(--accent-electric-blue)', border: 'none', borderRadius: '8px', width: '45px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                <Send size={20} color="black" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

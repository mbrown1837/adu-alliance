'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Check initial preference
    const savedTheme = localStorage.getItem('adu_theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('light', savedTheme === 'light');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('adu_theme', nextTheme);
    document.documentElement.classList.toggle('light', nextTheme === 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-brand-borderDark/80 hover:border-brand-amber text-slate-300 hover:text-white transition-all flex items-center justify-center bg-brand-dark/50"
      aria-label="Toggle Light and Dark Mode"
      title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-brand-amber transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-brand-amber transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}

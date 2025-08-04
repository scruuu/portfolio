import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  isExpanded: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, setDarkMode, isExpanded }) => (
  <motion.button
    whileHover={{ scale: 1.1, boxShadow: '0 0 0 2px #38bdf8' }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 300 }}
    className={`rounded-full p-2 border-2 ${darkMode ? 'border-blue-500 bg-gray-900 text-blue-400' : 'border-gray-700 bg-white text-gray-700'} shadow hover:ring-2 hover:ring-blue-400 outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center transition-all duration-200 ${isExpanded ? 'w-full' : 'w-auto'}`}
    onClick={() => setDarkMode(!darkMode)}
    aria-label="Toggle dark mode"
  >
    <AnimatePresence>
      {isExpanded ? (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          className="flex items-center gap-2"
        >
          {darkMode
            ? <><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg> <span>Light</span></>
            : <><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg> <span>Dark</span></>
          }
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
        >
          {darkMode
            ? <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            : <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
          }
        </motion.div>
      )}
    </AnimatePresence>
  </motion.button>
);

export default ThemeToggle;

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

interface SidebarProps {
  selected: string;
  onSelect: (section: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const sections = [
  { name: "Home", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-7 4h6" /></svg> },
  { name: "Issues", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { name: "Projects", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> },
  { name: "Discussions", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V10a2 2 0 012-2h8z" /></svg> },
];

const Sidebar: React.FC<SidebarProps> = ({ selected, onSelect, darkMode, setDarkMode, isOpen, setIsOpen }) => {
  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: '-100%', opacity: 0 }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-10"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={'fixed top-0 left-0 z-20 h-full w-64 bg-transparent backdrop-blur-md border-r border-[#30363d] p-6 flex flex-col gap-2 font-sans shadow-xl'}
          >
            <div className="flex items-center justify-between mb-4">
              <a href="https://github.com/ujjawalvatsa" target="_blank" rel="noopener noreferrer" className="text-white">
                <svg className="w-8 h-8" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.67.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
              </a>
              <button
                className="p-2 rounded text-[#c9d1d9] bg-[#161b22] border border-[#30363d] shadow focus:outline-none"
                onClick={() => setIsOpen(false)}
                aria-label="Close sidebar"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-2 mt-2">
              {sections.map((section) => (
                <motion.button
                  key={section.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`w-full flex items-center gap-x-4 text-left px-4 py-2 rounded font-sans font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#58a6ff] ${selected === section.name ? 'bg-[#21262d] text-[#c9d1d9] font-bold border border-[#30363d]' : 'hover:bg-[#161b22] text-[#c9d1d9]'}`}
                  onClick={() => { onSelect(section.name); setIsOpen(false); }}
                  aria-current={selected === section.name ? 'page' : undefined}
                >
                  {section.icon}
                  <span className="text-lg">{section.name}</span>
                </motion.button>
              ))}
            </nav>
            <div className="mt-auto pt-4 flex justify-center">
              <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} isExpanded={true} />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

export default Sidebar;

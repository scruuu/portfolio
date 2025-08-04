import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './index.css';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [selected, setSelected] = useState('Home');
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={darkMode ? 'dark bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans' : 'bg-white text-gray-800 min-h-screen font-sans'}>
      <Sidebar
        selected={selected}
        onSelect={setSelected}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className="flex-1 flex flex-col">
        <Header userName="Ujjawal Vats" repoTitle="portfolio" setIsOpen={setIsOpen} />
        <main className="max-w-3xl mx-auto p-8 flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1"
            >
              <MainContent selected={selected} />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;

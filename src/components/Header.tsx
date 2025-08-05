import React from 'react';

interface HeaderProps {
  userName: string;
  repoTitle: string;
  setIsOpen: (val: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ userName, repoTitle, setIsOpen }) => (
  <header className="w-full flex items-center px-6 py-4 border-b border-[#30363d] bg-transparent backdrop-blur-md text-[#c9d1d9] font-sans sticky top-0 z-10 shadow">
    <button
      className="p-2 rounded text-[#c9d1d9] bg-[#161b22] border border-[#30363d] shadow focus:outline-none"
      onClick={() => setIsOpen(true)}
      aria-label="Open sidebar"
    >
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
    <nav className="flex items-center gap-2 text-xl font-sans ml-4">
      <span className="font-bold text-[#58a6ff]">{userName}</span>
      <span className="text-[#8b949e]">/</span>
      <span className="font-semibold text-[#c9d1d9]">{repoTitle}</span>
    </nav>
  </header>
);

export default Header;

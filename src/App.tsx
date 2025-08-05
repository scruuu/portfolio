import React from 'react';
import './index.css';
import './App.css'; // For hero section specific styles

// Add Inter font (similar to Proxima Nova)
import '@fontsource/inter/300.css'; // light
import '@fontsource/inter/400.css'; // regular
import '@fontsource/inter/500.css'; // medium
import '@fontsource/inter/700.css'; // bold

const App: React.FC = () => {
  return (
    <div className="relative w-screen min-h-screen font-['Inter']">
      <div className="relative w-screen h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/src/assets/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-between h-full text-white p-8">
          {/* Top Navigation */}
          <div className="w-full flex justify-between items-center font-['Inter']">
            <h2 className="text-2xl font-bold uppercase">UJJAWAL VATS</h2>
            <nav className="flex gap-8">
              <a href="#work" className="text-xl hover:text-gray-300 transition-all uppercase relative group">
                WORK
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </a>
              <a href="#projects" className="text-xl hover:text-gray-300 transition-all uppercase relative group">
                PROJECTS
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </a>
              <a href="#interests" className="text-xl hover:text-gray-300 transition-all uppercase relative group">
                INTERESTS
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-xl hover:text-gray-300 transition-all uppercase relative group">
                CONTACT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </a>
            </nav>
          </div>
          
          {/* Center Content */}
          <div className="flex items-center justify-center flex-1">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-center font-['Inter']">
              ROME WASN'T BUILT IN A DAY
            </h1>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-900 py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:col-span-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-left text-gray-900 font-['Inter'] uppercase">WORK EXPERIENCE</h2>
            </div>
            <div className="md:col-span-1 flex items-center">
              <p className="text-lg text-gray-700 font-['Inter']">A brief overview of my professional journey, highlighting impactful roles and the skills I've developed across top organizations in finance, technology, and design.</p>
            </div>
          </div>
          {/* Work Experience Card */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="relative group overflow-hidden rounded-lg shadow-lg bg-white border border-gray-200">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Morgan_Stanley_Logo_1.svg" 
                alt="Morgan Stanley" 
                className="w-full h-80 object-contain bg-gray-50 p-12 transition-all duration-300 group-hover:opacity-10" 
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-3xl font-bold text-gray-900 mb-2 font-['Inter'] uppercase">MORGAN STANLEY</h3>
                <p className="text-xl text-gray-700 font-['Inter'] mb-2 uppercase">TECHNOLOGY APPRENTICE</p>
                <p className="text-lg text-gray-600 font-['Inter']">July 2024 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-black text-white py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div className="md:col-span-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-left text-white font-['Inter'] uppercase">PROJECTS</h2>
            </div>
            <div className="md:col-span-1 flex items-center">
              <p className="text-lg text-gray-300 font-['Inter']">A showcase of my personal projects and technical experiments, demonstrating my passion for innovation and problem-solving.</p>
            </div>
          </div>
          
          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 border border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" 
                alt="AI Project"
                className="w-full h-64 object-cover transition-all duration-300 group-hover:opacity-10" 
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-['Inter'] uppercase">AI CHATBOT</h3>
                <p className="text-gray-300 font-['Inter'] text-center mb-4">An intelligent conversational AI powered by machine learning and natural language processing.</p>
                <p className="text-gray-400 font-['Inter'] text-sm">Python • TensorFlow • React</p>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 border border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Blockchain Project" 
                className="w-full h-64 object-cover transition-all duration-300 group-hover:opacity-10" 
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-['Inter'] uppercase">DEFI PLATFORM</h3>
                <p className="text-gray-300 font-['Inter'] text-center mb-4">A decentralized finance platform enabling secure and transparent transactions.</p>
                <p className="text-gray-400 font-['Inter'] text-sm">Solidity • Web3.js • Next.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interests Section */}
      <div className="bg-white text-gray-900 py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div className="md:col-span-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-left text-gray-900 font-['Inter'] uppercase">INTERESTS</h2>
            </div>
            <div className="md:col-span-1 flex items-center">
              <p className="text-lg text-gray-700 font-['Inter']">Beyond code, I'm passionate about music, gaming, and sports. These interests shape my perspective and creativity.</p>
            </div>
          </div>
          
          {/* Interest Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Spotify Card */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1611339555312-e607c06213f1?ixlib=rb-4.0.3"
                alt="Spotify"
                className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white font-['Inter'] uppercase">MUSIC</h3>
              </div>
            </div>

            {/* Gaming Card */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3"
                alt="Gaming"
                className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white font-['Inter'] uppercase">GAMING</h3>
              </div>
            </div>

            {/* Sports Card */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3"
                alt="Sports"
                className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white font-['Inter'] uppercase">SPORTS</h3>
              </div>
            </div>

            {/* Reading Card */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3"
                alt="Reading"
                className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white font-['Inter'] uppercase">READING</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black text-white py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-['Inter'] uppercase">LET'S CONNECT</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors h-32"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
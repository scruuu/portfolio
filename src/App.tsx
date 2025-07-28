import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-neutral-900 min-h-screen flex flex-col items-center justify-center text-center text-white">
      <div className="flex p-8 gap-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo w-32 h-32 transition-transform duration-300 hover:scale-110 hover:rotate-6" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react w-32 h-32 transition-transform duration-300 hover:scale-110 hover:-rotate-6" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold underline text-cyan-400">Vite + React</h1>
      <div className="card p-8">
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-300" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="p-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

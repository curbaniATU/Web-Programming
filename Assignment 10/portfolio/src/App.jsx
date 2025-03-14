import { useState } from 'react'
import './App.css'

//* The information shown will be updated to be on the appropiate page
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen w-screen flex flex-col bg-gray-300 p-0 m-0">
        <header className="text-center items-start bg-gray-950 p-6 m-0">
          <h1 className='text-3xl font-bold font-mono text-gray-50'>Caleb Urbani</h1>
          <h3 className='text-2xl font-medium font-mono text-gray-50'>Computer Science</h3>
          <nav className="w-full text-white bg-gray-950 py-4 px-6 flex justify-center">
            <ul className="flex space-x-6">
              <li className="text-gray-50 hover:text-gray-300 font-thin font-mono text-xl cursor-pointer">Home</li>
              <li className="text-gray-50 hover:text-gray-300 font-thin font-mono text-xl cursor-pointer">Education</li>
              <li className="text-gray-50 hover:text-gray-300 font-thin font-mono text-xl cursor-pointer">Contact</li>
            </ul>
          </nav>
        </header>
        <main className="text-center flex flex-col items-center justify-center bg-gray-300 p-6">
          <div className="block">
            <img src="head-shot.jpg" alt="placeholder" className="border-4 border-gray-950 rounded-full object-cover w-50 h-50 " />
          </div>
          
        </main>
      </div>
    </>
  )
}

export default App

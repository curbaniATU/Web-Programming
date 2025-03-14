import { useState } from 'react'
import './App.css'

//* The information shown will be updated to be on the appropiate page
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen w-screen flex flex-col bg-gray-300 p-0 m-0">
        <header className="text-center items-start bg-gray-950 p-6 m-0">
          <h1 className='text-4xl font-bold font-mono text-gray-50'>Caleb Urbani</h1>
          <h3 className='text-3xl font-medium font-mono text-gray-50'>Computer Science</h3>
          <nav className="w-full text-white bg-gray-950 py-4 px-6 flex justify-center">
            <ul className="flex space-x-6">
              <li className="text-gray-50 hover:text-gray-300 font-thin font-mono text-xl cursor-pointer">Home</li>
              <li className="text-gray-50 hover:text-gray-300 font-thin font-mono text-xl cursor-pointer">Education</li>
              <li className="text-gray-50 hover:text-gray-300 font-thin font-mono text-xl cursor-pointer">Contact</li>
            </ul>
          </nav>
        </header>
        <main className="text-center flex flex-col items-center bg-gray-300 p-6 flex-grow space-x-1">
          <div className="block border-2 border-gray-950 bg-gray-950 rounded-lg p-6 m-6 max-w-4xl w-auto">
            <img src="head-shot.jpg" alt="placeholder" className="border-4 border-gray-950 rounded-full object-cover w-50 h-50 ml-auto mr-auto" />
            <h2 className="text-gray-50 font-bold font-mono text-2xl">Welcome To My Website!</h2>
            <p className="text-gray-50 font-thin font-mono">My name is Caleb Urbani and I am a Computer Science major at Arkansas Tech University. I started college in 2021 as a Computer Engineering Major before switching to Computer Science in 2023. I will be graduating in May of 2025. My primary interests are in web development, backend development, and database design.</p>
          </div>
        </main>
        <footer className="text-white text-left bg-gray-950 p-6 mt-auto">
          <p className='text-gray-50 font-thin font-mono'>Contact Me</p>
          <p className="text-gray-50 font-thin font-mono">Email: <a href="mailto:curbani@atu.edu" className="text-gray-50 font-thin font-mono cursor-pointer" style={{color: "var(--color-gray-50)", textDecorationLine: 'underline'}}>curbani@atu.edu</a></p>
          <p className="text-gray-50 font-thin font-mono">Phone: <a href="tel:501-555-5555" className="text-gray-50 font-thin font-mono cursor-pointer" style={{color: "var(--color-gray-50)", textDecorationLine: 'underline'}}>501-555-5555</a></p>
        </footer>
      </div>
    </>
  )
}

export default App

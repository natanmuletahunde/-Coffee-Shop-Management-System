import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Health Center</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </nav>
      </header>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="bg-blue-800 text-white p-4 text-center">
        © 2025 Health Center. All rights reserved.
      </footer>
    </BrowserRouter>
  )
}

export default App

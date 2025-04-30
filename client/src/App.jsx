import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./components/SignUp";
import Login from "./pages/Login"; // Make sure this file exists

function App() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Health Center</h1>
        <nav className="space-x-4">
          <Link to="/home" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/signup" className="hover:text-gray-300">Sign Up</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
        </nav>
      </header>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/home"
            element={token ? <Home /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </main>

      <footer className="bg-blue-800 text-white p-4 text-center">
        © 2025 Health Center. All rights reserved.
      </footer>
    </Router>
  );
}

export default App;

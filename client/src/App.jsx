import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./components/SignUp";
import Login from "./pages/Login";
import IsAuth from "./isAuth";
import Logout from "./components/Logout";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Health Center</h1>
        <nav className="space-x-4">
          <Link to="/home" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          {!token && (
            <>
              <Link to="/signup" className="hover:text-gray-300">Sign Up</Link>
              <Link to="/" className="hover:text-gray-300">Login</Link>
            </>
          )}
          <IsAuth>
            <Logout/>
          </IsAuth>
        </nav>
      </header>

      <main className="p-6">
        <Routes>
          {/* <Route path="/" element={<Navigate to={token ? "/home" : "/login"} replace />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<IsAuth><Home/></IsAuth>} />
        </Routes>
      </main>

      <footer className="bg-blue-800 text-white p-4 text-center">
        © 2025 Health Center. All rights reserved.
      </footer>
    </Router>
  );
}

export default App;

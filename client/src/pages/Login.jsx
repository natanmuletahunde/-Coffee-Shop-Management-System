import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (err) {
      setErrorMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        className="w-full p-2 border mb-3 rounded"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        className="w-full p-2 border mb-3 rounded"
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMessage && <div className="text-red-500 mb-3">{errorMessage}</div>}
      <button
        onClick={login}
        className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Login
      </button>
    </div>
  );
};

export default Login;

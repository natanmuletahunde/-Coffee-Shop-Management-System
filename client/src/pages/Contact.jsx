import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      alert("Login successful! Token: " + res.data.token);
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
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
        className="w-full p-2 border mb-4 rounded"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={login}
        className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Login
      </button>
    </div>
  );
};

export default Contact;

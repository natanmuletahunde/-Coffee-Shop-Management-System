import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");        // ✅ Name state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const signup = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        name, email, password,   // ✅ Include name in request
      });

      alert("Signup successful! Token: " + res.data.token);
      setName(""); setEmail(""); setPassword("");
    } catch (err) {
      setErrorMessage(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">Register</h2>

      {/* Name input */}
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        className="w-full p-2 border mb-3 rounded"
        onChange={(e) => setName(e.target.value)}
      />

      {/* Email input */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        className="w-full p-2 border mb-3 rounded"
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password input */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        className="w-full p-2 border mb-4 rounded"
        onChange={(e) => setPassword(e.target.value)}
      />

      {errorMessage && (
        <div className="text-red-500 text-sm mb-3">{errorMessage}</div>
      )}

      <button
        onClick={signup}
        className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? "Registering..." : "Sign Up"}
      </button>
    </div>
  );
};

export default Signup;

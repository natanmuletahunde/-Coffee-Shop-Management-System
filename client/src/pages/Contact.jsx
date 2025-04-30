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
      alert("Login successful. Token: " + res.data.token);
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <h1>Login to Contact Us</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block my-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block my-2"
      />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Contact;

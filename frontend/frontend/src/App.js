import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("jobseeker");
  const [user, setUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    // simple login simulation
    setUser({ email, role });
  };

  // If user is logged in
  if (user) {
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            Welcome {user.role === "jobseeker" ? "Job Seeker" : "Recruiter"}: {user.email}
          </h2>
        </header>
      </div>
    );
  }

  // Login page
  return (
    <div className="App">
      <header className="App-header">
        <h2>Local Job Hub</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="jobseeker">Job Seeker</option>
            <option value="recruiter">Job Recruiter</option>
          </select>
          <button type="submit">Login</button>
        </form>
      </header>
    </div>
  );
}

export default App;

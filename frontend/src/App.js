import { useState } from "react";
import "./App.css";
import JobSeekerDashboard from "./components/JobSeekerDashboard";

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
        {user.role === "jobseeker" ? (
          <JobSeekerDashboard />
        ) : (
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h2 className="text-2xl font-bold text-blue-600">
                Recruiter Dashboard (Coming Soon 🚀)
              </h2>
              <p className="text-gray-600 mt-2">
                Welcome {user.email}, you can post jobs and view candidates here.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Login page
  return (
    <div className="App flex items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Local Job Hub
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="jobseeker">Job Seeker</option>
            <option value="recruiter">Recruiter</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;

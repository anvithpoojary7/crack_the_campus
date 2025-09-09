import { useState } from "react";
import axios from "axios";

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("jobseeker");
  const [error, setError] = useState("");
  const [isRegister, setIsRegister] = useState(false); // toggle state

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        // 🔹 Call register API
        const res = await axios.post("http://localhost:5000/api/auth/register", {
          email,
          password,
          role,
        });

        if (res.data.success) {
          onLogin(res.data.user);
        } else {
          setError(res.data.msg || "Registration failed");
        }
      } else {
        // 🔹 Call login API
        const res = await axios.post("http://localhost:5000/api/auth/login", {
          email,
          password,
        });

        if (res.data.success) {
          onLogin(res.data.user);
        } else {
          setError(res.data.msg || "Login failed");
        }
      }
    } catch (err) {
      setError(err.response?.data?.msg || "Server error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          {isRegister ? "Register at Local Job Hub" : "Login to Local Job Hub"}
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
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

          {isRegister && (
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="jobseeker">Job Seeker</option>
              <option value="recruiter">Recruiter</option>
            </select>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          {isRegister ? "Already have an account?" : "Not registered yet?"}{" "}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-blue-600 hover:underline"
          >
            {isRegister ? "Login here" : "Register here"}
          </button>
        </p>
      </header>
    </div>
  );
}

export default LoginPage;

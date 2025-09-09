import { useState } from "react";
import "./App.css";
import JobSeekerDashboard from "./components/JobSeekerDashboard";
import LoginPage from "./components/LoginPage";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

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

  return <LoginPage onLogin={handleLogin} />;
}

export default App;

import { useState } from "react";

function JobSeekerDashboard() {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    pincode: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Seeker Data:", formData);
    alert("Details submitted successfully 🚀");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Job Seeker Dashboard
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Job Title */}
          <div>
            <label className="block text-gray-700 mb-1">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="e.g., Software Engineer"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Pincode */}
          <div>
            <label className="block text-gray-700 mb-1">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Enter your area pincode"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block text-gray-700 mb-1">Experience (in years)</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="e.g., 2"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              min="0"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Details
          </button>
        </form>
      </div>
    </div>
  );
}

export default JobSeekerDashboard;

// backend/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // for hackathon keep simple
  role: { type: String, enum: ["jobseeker", "recruiter"], required: true },
  profile: {
    name: String,
    skills: [String],
    experience: Number,
    pincode: String,
  },
});

module.exports = mongoose.model("User", userSchema);

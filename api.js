// register.js
const axios = require('axios');

const registrationData = {
  email: "akriti1221.be22@chitkara.edu.in",
  name: "Akriti Patial",
  mobileNo: "8219701805",
  githubUsername: "akritpatial",
  rollNo: "2210991221",
  collegeName: "Chitkara University",
  accessCode: "PwzufG"
};

axios.post("http://20.244.56.144/evaluation-service/register", registrationData)
  .then(res => console.log("✅ Registered successfully:", res.data))
  .catch(err => console.error("❌ Registration failed:", err.response?.data || err.message));

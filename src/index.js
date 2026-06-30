const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
 res.json({
  message: "DevOps Health API is running",
  healthCheck: "/health"
 });
});
app.get("/health", (req, res) => {
 res.status(200).json({
  status: "ok",
  service: "devops-health-api",
  timestamp: new Date().toISOString()
 });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
  });
}

module.exports = app; 



const express = require('express');
const app = express();
const port = 3000;
// Middleware to parse JSON requests
app.use(express.json());
// Example route
app.get('/', (req, res) => {
  res.send('Hello from Express.js!');
});
// Start the server
app.listen(port, () => {
  console.log(`Express.js server is running on http://localhost:${port}`);
});

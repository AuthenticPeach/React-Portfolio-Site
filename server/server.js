// server/server.js
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

// Example API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the React app build directory
  app.use(express.static(path.join(__dirname, '../client/build')));

  // For any route not matching an API route, send back React's index.html file.
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

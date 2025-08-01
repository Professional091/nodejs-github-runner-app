const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Homepage route
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to My Node.js App! afsgdhtfjygukh</h1>
    <p>Use <code>/status</code> to check server info.</p>
  `);
});

// Status route
app.get('/status', (req, res) => {
  res.json({
    status: '🟢 Running',
    uptime: process.uptime().toFixed(2) + ' sec',
    hostname: os.hostname(),
    platform: os.platform(),
    memory: {
      free: (os.freemem() / 1024 / 1024).toFixed(2) + ' MB',
      total: (os.totalmem() / 1024 / 1024).toFixed(2) + ' MB'
    },
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('<h2>404 Not Found</h2>');
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://0.0.0.0:${port}`);
});

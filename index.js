const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('🎉 Live Node.js App using GitHub Self-Hosted Runner!');
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
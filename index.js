const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('🎉 Live Node.js App using GitHub Self-Hosted Runner!');
});

// Change here: listen on 0.0.0.0, not localhost
app.listen(PORT, '0.0.0.0', () => {
  console.log(`App listening at http://0.0.0.0:${PORT}`);
});

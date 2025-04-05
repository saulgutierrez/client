// Require for express framework
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware to parse JSON bodies
// We use to have body-parser but express has it built in now
app.use(express.json({extended: false}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  res.send(`Hello ${req.body.name}! POST`);
});

app.listen(PORT, () => console.log(`Server strated on port ${PORT}`));
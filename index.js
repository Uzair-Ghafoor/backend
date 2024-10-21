const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log('server is listening on port 3000');
});

app.get('/', (req, res) => {
  res.send('hello from the server');
});

app.post('/', (req, res) => {
  const data = JSON.stringify(req.body);
  fs.writeFileSync(`${__dirname}/index.txt`, data);
});

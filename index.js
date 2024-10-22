const express = require('express');
const app = express();
const dotenv = require('dotenv');
const dataRouter = require('./routes/data.js');
// communication in the format of json
app.use(express.json());
// to hold the secrets
dotenv.config();
// server
const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});
// controllers
// const getData = (req, res) => {
//   res.send('hello from the server');
// };
app.use('/api', dataRouter);
// routes
// app.get('/', getData);

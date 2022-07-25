const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const port = 9000;

app.use(cors());
app.use(express.json());

app.post('/api/v1/auth/signup', async (req, res) => {
  const user = req.body;

  console.log(user);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
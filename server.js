const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/sayalibot_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// simple test route
app.get('/', (req, res) => {
  res.send('SayaliBot backend is running!');
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

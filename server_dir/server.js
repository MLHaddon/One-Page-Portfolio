const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb+srv://root:root@dbcluster0.ne68sfj.mongodb.net/myDB',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }
).then(() => {
  console.log('Connected to MongoDB.');
}).catch((err) => {
  console.log(`Error connected to database. Error: ${err}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the website');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require('mongoose');
const port = 4000;
const app = express();
app.use(cors());
app.use(morgan('dev'));
mongoose.connect('mongodb://127.0.0.1:27017/challenge1')
  .then(() => console.log('connected to database.'))
  .catch((error) => console.log(error));
mongoose.Promise = global.Promise;
app.get('/', async (req, res) => {
  res.send({ message: 'hello world' })
})
app.listen(port, function () {
  console.log('now listening for requests serving on port ' + port)
}
)


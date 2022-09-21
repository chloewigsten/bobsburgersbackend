require("dotenv").config();
require('./config/db.connection')

const { MONGODB_URI } = process.env;
const { PORT = 3000 } = process.env;

const express = require("express");
const cors = require('cors');
const morgan = require('morgan');

const app = express();

//import characters
const characterController = require('./controllers/character_controller')

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/characters', characterController)

app.get("/", (req, res) => {
	res.send("hello world");
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const route = require('./routes');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(route);

app.listen(1337, () => console.log('server started on port 1337'));

require('dotenv').config();
const express = require('express');
const connectDB = require("./config/db");
const cataloguesRouter = require('./router/catalogueRouter')

connectDB();

const app = express();

app.use(express.json());
app.use('/catalogues', cataloguesRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
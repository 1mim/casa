require('dotenv').config();
const express = require('express');
const connectDB = require("./config/db");
const cataloguesRouter = require('./router/catalogueRouter');
const userRouter = require('./router/userRouter');

connectDB();

const app = express();

app.use(express.json());
app.use('/catalogues', cataloguesRouter)
app.use('/users', userRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
require('dotenv').config();
const express = require('express');
const connectDB = require("./config/db");
const cataloguesRouter = require('./router/catalogueRouter');
const userRouter = require('./router/userRouter');
const orderRouter = require('./router/orderRouter')

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api endpoints
app.use('/catalogues', cataloguesRouter)
app.use('/user', userRouter)
app.use('/orders', orderRouter)

//paypal endpoint
app.get('/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
} )

// error catcher
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
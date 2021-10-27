require('dotenv').config();
const express = require('express');
const connectDB = require("./config/db");
const cataloguesRouter = require('./router/catalogueRouter');
const userRouter = require('./router/userRouter');
const orderRouter = require('./router/orderRouter')
const path = require('path');

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

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send("Api running");
    });
}

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
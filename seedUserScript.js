require('dotenv').config();

const userDB = require('./data/userData');
const connectDB = require('./config/db');
const User = require('./models/userModel');

connectDB();

const importUserData = async () => {
    try {
        await User.deleteMany({});

        await User.insertMany(userDB);

        console.log("User data import successful");

        process.exit();

    } catch (error) {
        console.error("Error with data import");
        process.exit(1);
    }
}

importUserData();
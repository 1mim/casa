require('dotenv').config();

const catalogueDB = require('./data/catalogueData');
const connectDB = require('./config/db');
const catalogue = require('./models/catalogue');

connectDB();

const importData = async () => {
    try {
        await catalogue.deleteMany({});

        await catalogue.insertMany(catalogueDB);

        console.log("Data import successful");

        process.exit();

    } catch (error) {
        console.error("Error with data import");
        process.exit(1);
    }
}

importData();
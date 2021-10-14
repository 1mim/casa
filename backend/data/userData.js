const bcrypt = require('bcryptjs');

const userDB = [
    {
        name: "Iman",
        email: "admin@email.com",
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true,
    },
    {
        name: "Bey",
        email: "bey@email.com",
        password: bcrypt.hashSync('1234', 8),
        isAdmin: false,
    },
]

module.exports = userDB;
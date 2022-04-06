const mongoose = require('mongoose');

const connection = async (url) => {
    await mongoose
        .connect(url)
        .then(() => {
            console.log('Database Connected...');
        })
        .catch((e) => {
            console.error(e);
        });
};

module.exports = connection;

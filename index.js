const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const HOST = 'localhost';
const PORT = process.env.PORT;
const connection = require('./database/connection');
const taskRouter = require('./routes/task');

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('./public'))

app.use('/api/v1/tasks', taskRouter);

try {
    connection(process.env.MONGO_URL);
    app.listen(PORT, console.log(`Server running on http://${HOST}:${PORT}`));
} catch (error) {
    console.error(error);
}

const express = require
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const transactionRoutes = require('./routes/transaction')

const app = express();

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/transaction', transactionRoutes);

module.exports = app;

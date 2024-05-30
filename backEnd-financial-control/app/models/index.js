const { Sequielize, DataTypes } = require('sequelize');
const sequelize = new Sequielize(
    {
        dialect: 'sqlite',
        storage: './database/sqlite'
    }
);

const User = require('./user')(sequelize, DataTypes);
const Transaction = require('./transaction')(sequelize, DataTypes);

User.hasMany(Transaction);
Transaction.belongsTo(User);

sequelize.sync();

module.exports = {
    sequelize,
    User,
    Transaction,
};

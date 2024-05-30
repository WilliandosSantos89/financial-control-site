const { Transaction } = require('../models');

exports.creatTransaction = async (req, res) => {
    try {
        const {type, amount, category, date, description} = req.body;
        const transaction = await Transaction.create({
            type,
            amount,
            category,
            date,
            description,
            UserId: req.user.id
        });
        res.status(201).json(transaction);
    }catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.findAll({ where: {UserId: req.user.id}})
        res.json(transactions);
    }catch (error) {
        res.status(500).json({error: err.message});
    }
 };

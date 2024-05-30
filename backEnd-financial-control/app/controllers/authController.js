const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });
        res.status(201).json(user);
        
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(404).json({message: 'Invalid email or password'});
        }
        const token = jwt.singn({userId: user.id}, 'secretkey', {expiresIn: '1h'});
        res.status(200).json({token});
    }catch (error) {
        res.status(500).json({error: error.message});
    }
};
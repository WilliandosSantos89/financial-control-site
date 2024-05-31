const jwt = require('jsonwebtoken');
const { User } = require ('../models');

module.exports = async (req, res, next) => {
    const authHeader = req.headers.autohorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Token not provided' });
    }

    const [, token] = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, 'secretkey');
        req.user = await User.findByPk(decoded.id);
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};
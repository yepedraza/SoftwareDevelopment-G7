const UserSchema = require('../models/user');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(403).json({
            error: {
                code: 403,
                msg: 'Usuaro y contraseña incorrectos'
            }
        });
    }

    const user = await UserSchema.findOne({ email: req.body.email });
    const validatePassword = await bcrypt.compare(req.body.password, user.password);
    if (!validatePassword) {
        return res.status(403).json({
            error: {
                code: 403,
                msg: 'Usuaro y contraseña incorrectos'
            }
        });
    }

    const token = jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        process.env.TOKEN_SECRET,
        { expiresIn: '10h' }
    );

    res.status(200).json({ token });
}

const validateToken = (req, res) => {
    return res.status(200).json({
        data: {
            code: 200,
            msg: 'token valido'
        }
    });
}

module.exports.login = login;
module.exports.validateToken = validateToken;
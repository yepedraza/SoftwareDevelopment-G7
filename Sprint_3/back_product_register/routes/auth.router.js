const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');
const { authController } = require('../controllers')
const verifyToken = require('../middlewares/verifyToken');

router.post('/login',
    body('email', 'El email es requerido y debe estar entre(6,100) carecteres')
        .exists()
        .isLength({ min: 5, max: 100 }),
    body('password', 'la contraseña es requerida y debe estar entre(8,16) carecteres')
        .isLength({ min: 7, max: 16 }),
    authController.login
)

router.get('/verifyToken',verifyToken,authController.validateToken)

module.exports = router;
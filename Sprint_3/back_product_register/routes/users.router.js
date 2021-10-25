const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');
const { usersController } = require('../controllers');
const verifyToken = require('../middlewares/verifyToken');

router.get('/:id', verifyToken, usersController.getUser)

router.get('/', usersController.getUsers)

router.post('/',
    body('fullName', 'El nombre es requerido y debe estar entre(6,100) carecteres')
        .exists()
        .isLength({ min: 5, max: 100 }),
    body('email', 'El email es requerido y debe estar entre(6,100) carecteres')
        .exists()
        .isLength({ min: 5, max: 100 }),
    body('password', 'la contraseña es requerida y debe estar entre(8,16) carecteres')
        .isLength({ min: 8, max: 16 }),
    usersController.createUser)

router.put('/:id',
    body('fullName', 'El nombre es requerido y debe estar entre(6,100) carecteres')
        .exists()
        .isLength({ min: 5, max: 100 }),
    body('email', 'El email es requerido y debe estar entre(6,100) carecteres')
        .exists()
        .isLength({ min: 5, max: 100 }),
    body('password', 'la contraseña es requerida y debe estar entre(8,16) carecteres')
        .isLength({ min: 8, max: 16 }),
        verifyToken, usersController.updateUser)

router.delete('/:id', verifyToken, usersController.deleteUser)

module.exports = router;
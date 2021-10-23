/*importando el modulo Router de express para definir las rutas
del crud de productos*/
const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');
/*importando el controlador de los productos, encargado de gestionar
la interaccion entre las peticiones HTTP y la base de datos*/
const { salesController } = require('../controllers');
const verifyToken = require('../middlewares/verifyToken');

router.get('/:id', verifyToken, salesController.getSale);

router.get('/', salesController.getSales);

//escribiendo las reglas que deben cumplir los parametros para crear un producto
router.post('/',
    body('clientID', 'Es la identificación del cliente').exists().isNumeric(),
    body('clientName', 'El nombre del cliente, debe tener entre 5 y 60 caractéres').exists(),
    body('sellerID', 'Es la identificación del vendedor').exists().isNumeric(),
    body('sellerName', 'El nombre del cliente, debe tener entre 5 y 60 caractéreso').exists(),
    body('prouctID', 'El identificador del prodicto vendido').exists(),
    body('amount', 'La cantidad comprada del mismo producto, entre 1 y 150 unidades').exists().isNumeric()
    , verifyToken, salesController.createSales);

//escribiendo las reglas que deben cumplir los parametros para actualizar un producto               
router.put('/:id',
    body('clientID', 'Es la identificación del cliente').exists().isNumeric(),
    body('clientName', 'El nombre del cliente, debe tener entre 5 y 60 caractéres').exists(),
    body('sellerID', 'Es la identificación del vendedor').exists().isNumeric(),
    body('sellerName', 'El nombre del cliente, debe tener entre 5 y 60 caractéreso').exists(),
    body('prouctID', 'El identificador del prodicto vendido').exists(),
    body('amount', 'La cantidad comprada del mismo producto, entre 1 y 150 unidades').exists().isNumeric()
    , verifyToken, salesController.updateSales);

router.delete('/:id', verifyToken, salesController.deleteSales);

module.exports = router;
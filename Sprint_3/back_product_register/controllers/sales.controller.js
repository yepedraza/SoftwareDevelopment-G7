//Importando el modelo de Base de datos de los productos
const SalesSchema = require('../models/sales');

//importando la libreria que nos permite capturar los errores en el cuerpo de la solicitudes
const { validationResult } = require('express-validator');

const getSale = async (req, res) => {
    if (req.params.id != 'undefined') {
        try {
            let sale = await SalesSchema.findById(req.params.id);
            res.status(200).json({ data: sale });
        }
        catch (err) {
            res.status(404).json({
                error: {
                    code: 404,
                    message: "Venta no encontrada"
                }
            })
        }
    } else {
        res.status(404).json({
            error: {
                code: 404,
                message: "ID not found"
            }
        })
    }
}

const getSales = async (req, res) => {
    try {
        let sale = await SalesSchema.find();
        res.status(200).json({ data: sale });
    }
    catch (err) {
        res.status(404).json({
            error: {
                code: 404,
                message: "Problemas con la base de datos" + err.message
            }
        })
    }
}

const createSales = async (req, res) => {
    //verificando que si hay errores en los parametros de la solictud
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        //si existen errores damos una respuesta erronea
        return res.status(400).json({
            error: {
                code: 404,
                message: "Alguna mierda" + err.message,
                errors: errors.array()
            }
        });
    }
    // let tempSales = {
    //     value: parseInt(req.body.value),
    //     description: req.body.description,
    //     state: req.body.state
    // }

    let sale = new SalesSchema(req.body);
    try {
        await sale.save();
        res.status(201).json({ data: sale });
    }
    catch (err) {
        res.status(404).json({
            error: {
                code: 404,
                message: "Problemas con la base de datos" + err.message
            }
        })
    }
}

const updateSales = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: {
                code: 404,
                message: "Quiza sea este" + err.message,
                errors: errors.array()
            }
        });
    }
    try {
        let newSales = {
            id: req.params.id,
            clientID: req.body.clientID,
            clientName: req.body.clientName,
            sellerID: req.body.sellerID,
            sellerName: req.body.sellerName,
            productoID: req.body.productoID,
            amount: req.body.amount
        }
        await SalesSchema.findByIdAndUpdate(req.params.id, newSales);
        res.status(201).json({ data: newSales })
    }
    catch (err) {
        res.status(404).json({
            error: {
                code: 404,
                message: "ID not found"
            }
        })
    }
}


const deleteSales = async (req, res) => {
    if (req.params.id != 'undefined') {
        try {
            let result = await SalesSchema.findByIdAndRemove(req.params.id);
            res.status(200).json({ data: result });
        }
        catch (err) {
            res.status(404).json({
                error: {
                    code: 404,
                    message: "Saleso no encontrado"
                }
            })
        }
    } else {
        res.status(404).json({
            error: {
                code: 404,
                message: "ID not found"
            }
        })
    }
}

module.exports.getSale = getSale;
module.exports.getSales = getSales;
module.exports.createSales = createSales;
module.exports.updateSales = updateSales;
module.exports.deleteSales = deleteSales;


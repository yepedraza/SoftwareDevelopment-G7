//importando paquetes
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const expressValidator = require('express-validator');

//inicializando nuestra aplicación de express
const app = express();

//usando cors para peticiones de origen cruzado para recursos compartidos
app.use(cors());

//configuramos nuestra API para trabajar con objetos tipo JSON en las peticiones HTTP
app.use(express.json())

//importando la configuración de conexion con la base de datos
const dbConfig = require('./config/dbConfig');
//creando la conexion con la base de datos mongoDB
mongoose.connect(dbConfig.urlDatabase)
    .then(db => console.log("db connected"))
    .catch(err => console.error(err))

//usando el Middleware morgan para registrar y detallar las solicitudes HTTP que llegan al servidor 
app.use(morgan("dev"));

//utilizando variables de entorno definidas en el archivo .env
require('dotenv').config();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server listen http://localhost:${port}`)
})

//ruta base de nuestra API
app.get('/', (req, res) => {
    res.json({ status: 200 });
})

//importamos todas las rutas que definimos en ./routes/index.js
const routes = require('./routes');

/*usando las rutas de productos para toda las peticiones
 que llegen a nuestra API con /productos */
app.use('/productos', routes.productsRouter);
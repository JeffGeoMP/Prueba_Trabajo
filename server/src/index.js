const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


/**
 * Configuracion del servidor
 */
 
const app = express();
const port = 3000;

app.set('port', port);


/**
 * Miiddlewares
 */

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

/**
 * Rutas del Servidor
 */
app.use(require('./routes/route'));


/**
 * Ejecucion del Servidor
 */
app.listen(app.get('port'), ()=>{
    console.log(`API Corriendo en http://localhost:${port}`);
});
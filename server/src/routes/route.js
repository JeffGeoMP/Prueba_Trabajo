const {Router} = require('express');
const {AddCredential, AddMessage, SearchMessage, SearchTags} = require('../utils/data');

const app = Router();


/**
 * @description Ruta para almacenar credenciales
 * Ruta no Autenticada
 */
app.put('/credential', (req, res) =>{
    try {
        let {key, shared_secret} = req.body

        if(key != null && shared_secret != null){
            if(AddCredential(key, shared_secret)){
                res.status(200).json({Message: "Credenciales Almacenadas"});
            }else{
                res.status(403).json({Message: "Credenciales ya Almacenadas en Servidor"});
            }
        }else{
            res.status(400).json({Message: "Faltan Parametros Importantes"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: "Ha Ocurrido un Error"});
    }
});

/**
 * @description Ruta para almacener mensajes y tags
 */

app.post('/messaqe', (req, res) => {
    try {
        let {msg, tags} = req.body;
        let Result = AddMessage(msg, tags);
        res.status(200).json({Message: "Mensaje Insertado Correctamente", Id : Result});
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: "Ha Ocurrido un Error"});
    }
});

/**
 * @description Ruta para devolver mensajes por Id
 * 
 */
app.get('/message/:id', (req, res) =>{
    try {
        let Result = SearchMessage(req.params.id);
        if(Result != null){
            res.status(200).json({Message: Result});
        }else{
            res.status(400).json({Message: "Mensaje No Encontrado"});
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: "Ha Ocurrido un Error"});
    }
});

/***
 * @description Ruta para devolver los mensges por tag
 */
app.get('/messages/:tag', (req, res) =>{
    try {
        let Result = SearchTags(req.params.tag);
        res.status(200).json({Messages: Result});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Ha Ocurrido un Error"});
    }
});

module.exports = app;
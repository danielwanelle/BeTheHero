const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json()); //habilita jSon
app.use(routes);

/**
 * Rota/Recurso
 * 
 * Métodos http:
 * GET      -> Buscar informação no Backend
 * POST     -> Criar uma informação no Backend
 * PUT      -> Alterar uma informação no Backend
 * DELETE   -> Deletar uma informação no Backend
 * 
 * Tipos de parametros:
 * Query params     -> Parametros nomeados enviados no recurso '?param1=valor2&param2=valor2'
 * Route params     -> Identificam um único recurso '/valor' ex. listar um usuario
 * Request Body     -> Corpo da requisição, utilizado para criar ou alterar recursos
 */



app.listen(3333);
//todas as funcionalidades do framework estão disponíveis a partir da keyword express
const express = require('express');
const cors = require('cors')
const routes = require('./routes');

//instanciar uma aplicação express
const app = express();

app.use(cors());
//especifica o formato das informações enviadas/recebidas
app.use(express.json());
app.use(routes);

//aguarda conexões na porta 3333
app.listen(3333);

/* Métodos HTTP:
 *
 * GET: buscar informações
 * POST: criar informações
 * PUT: alterar informações
 * DELETE: eliminar informações
 *
 *
*/

/* Tipos de parâmetros:
 *
 * Query Params: parâmetros nomeados enviados na rota após ? (filtragem, paginação)
 * Route Params: parâmetros utilizados para identificar recursos
 * Request Body: utilizado para criar ou alterar recursos
 */
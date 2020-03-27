const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

// Rota / Recurso

// Métodos HTTP

// GET:    Buscar informação no back-end
// POST:   Criar informação no back-end
// PUT:    Alterar informação no back-end
// DELETE: Deletar informação no back-end

// Tipos de parâmetros:

// Query:          Parâmetros nomeados enviados na rota após "?" (filtros, paginação)  ex:/users?name=Andre&idade=22
// Route:          Parâmetros utilizados para identificar recursos                     ex:/users/1
// Request Body:   Corpo da requisição, utilizado para criar ou alterar recursos

app.listen(3333)
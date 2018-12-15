const express = require('express')
const controller = require('./controller')
const massive = require('massive')
require('dotenv').config()
const {PORT, CONNECTION_STRING} = process.env
const port = PORT || 4444

const app = express()
app.use(express.json())

// Endpoints:
app.get('/api/inventory', controller.getAll)
app.post('/api/product', controller.createItem)
app.delete('/api/product/:id', controller.deleteItem)
app.put('/api/product/:id', controller.updateItem)
app.get('/api/inventory/:id', controller.getOne)


massive(CONNECTION_STRING).then(connection => {
    app.set('db', connection)
    app.listen(port, () => console.log(`I'm always listening on port ${port}`))
}).catch(err => console.log(err))
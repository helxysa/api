const express = require('express')
const aparelhoRoutes = require('./src/routes/route')

const app = express()
app.use(express.json())

app.use('/', aparelhoRoutes)


const port = 3000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const route_usuarios = require('./routes/route_usuarios')
const route_empreendimentos = require('./routes/route_empreendimentos')
const route_taxas = require('./routes/route_taxas')
const route_pagamentos = require('./routes/route_pagamentos')
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use((req, res, next) => { //Configuracao do CORS
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})



//Instanciando Rotas
app.use('/usuarios', route_usuarios)
app.use('/empreendimentos', route_empreendimentos)
app.use('/taxas', route_taxas)
app.use('/pagamentos', route_pagamentos)

const port = 5000
app.listen(port, () => {
    console.log(`Conectado na porta ${port}`)
});
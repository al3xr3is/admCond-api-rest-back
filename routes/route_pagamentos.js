const express = require('express')
const router = express.Router()
//const path = require('path')
const { Pagamentos } = require('../app/models')



router.get('/',  (req, res) => {
  Pagamentos.findAll().then((pagamento) => {
    res.json(pagamento)
  }).catch((err) => {
    console.log(err)
  })
  
}); //Listar todos

router.post('/', (req, res) => {
  Pagamentos.create({
    token: req.body.token,
    dataemissao: req.body.dataemissao,
    datavencimento: req.body.datavencimento,
    datapagamento: req.body.datapagamento,
    statuspagamento: req.body.statuspagamento,
    id_usuario: req.body.id_usuario,
    id_taxa: req.body.id_taxa
  }).then((pagamento) => {
    console.log(pagamento)
    res.redirect('/')
  }).catch((err) => {
    console.log(err)
  })
  
}); // Criar

router.get('/:id', (req, res) => {
  Pagamentos.findOne({
    where: {
      id: req.params.id
    }
  }).then((pagamento) => {
    res.json(pagamento)
  }).then((err) => {
    console.log(err)
  })
  
}); //Buscar

router.put('/:id', (req, res) => {
  Pagamentos.update({
    token: req.body.token,
    dataemissao: req.body.dataemissao,
    datavencimento: req.body.datavencimento,
    datapagamento: req.body.datapagamento,
    statuspagamento: req.body.statuspagamento,
    id_usuario: req.body.id_usuario,
    id_taxa: req.body.id_taxa
  }, {
    where: {
      id: req.params.id
    }
  }).then((pagamento) => {
    res.json(pagamento)
  }).catch((err) => {
    console.log(err)
  })
}); //Editar

router.delete('/:id', (req, res) => {
  Pagamentos.destroy({
    where: {
      id: req.params.id
    }
  }).then((pagamento) => {
    console.log('pagamento excluído', pagamento)
  }).catch((err) => {
    console.log(err)
  })
}); //Deletar

module.exports = router
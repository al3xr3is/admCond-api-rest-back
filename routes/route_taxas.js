const express = require('express')
const router = express.Router()
//const path = require('path')
const { Taxas } = require('../app/models')



router.get('/',  (req, res) => {
  Taxas.findAll().then((taxa) => {
    res.json(taxa)
  }).catch((err) => {
    console.log(err)
  })
  
}); //Listar todos

router.post('/', (req, res) => {
  Taxas.create({
    tipo: req.body.tipo,
    valor: req.body.valor,
    descricao: req.body.descricao
  }).then((taxa) => {
    console.log(taxa)
    res.redirect('/Taxas')
  }).catch((err) => {
    console.log(err)
  })
  
}); // Criar

router.get('/:id', (req, res) => {
  Taxas.findOne({
    where: {
      id: req.params.id
    }
  }).then((taxa) => {
    res.json(taxa)
  }).then((err) => {
    console.log(err)
  })
  
}); //Buscar

router.put('/:id', (req, res) => {
  Taxas.update({
    tipo: req.body.tipo,
    valor: req.body.valor,
    descricao: req.body.descricao
  }, {
    where: {
      id: req.params.id
    }
  }).then((taxa) => {
    res.json(taxa)
  }).catch((err) => {
    console.log(err)
  })
}); //Editar

router.delete('/:id', (req, res) => {
  Taxas.destroy({
    where: {
      id: req.params.id
    }
  }).then((taxa) => {
    console.log('taxa excluído', taxa)
  }).catch((err) => {
    console.log(err)
  })
}); //Deletar

module.exports = router
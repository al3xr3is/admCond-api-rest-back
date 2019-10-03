const express = require('express')
const router = express.Router()
//const path = require('path')
const { Empreendimentos } = require('../app/models')



router.get('/',  (req, res) => {
  Empreendimentos.findAll().then((empreendimento) => {
    res.json(empreendimento)
  }).catch((err) => {
    console.log(err)
  })
  
}); //Listar todos

router.post('/', (req, res) => {
  Empreendimentos.create({
    nome: req.body.nome,
    bloco: req.body.bloco,
    apartamento: req.body.apartamento
  }).then((empreendimento) => {
    console.log(empreendimento)
    res.redirect('/')
  }).catch((err) => {
    console.log(err)
  })
  
}); // Criar

router.get('/:id', (req, res) => {
  Empreendimentos.findOne({
    where: {
      id: req.params.id
    }
  }).then((empreendimento) => {
    res.json(empreendimento)
  }).then((err) => {
    console.log(err)
  })
  
}); //Buscar

router.put('/:id', (req, res) => {
  Empreendimentos.update({
    nome: req.body.nome,
    bloco: req.body.bloco,
    apartamento: req.body.apartamento
  }, {
    where: {
      email: req.params.email
    }
  }).then((empreendimento) => {
    res.json(empreendimento)
  }).catch((err) => {
    console.log(err)
  })
}); //Editar

router.delete('/:id', (req, res) => {
  Empreendimentos.destroy({
    where: {
      id: req.params.id
    }
  }).then((empreendimento) => {
    console.log('empreendimento excluído', empreendimento)
    res.redirect('/')
  }).catch((err) => {
    console.log(err)
  })
}); //Deletar

module.exports = router
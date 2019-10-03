const express = require('express')
const router = express.Router()
//const path = require('path')
const { Usuarios } = require('../app/models')



router.get('/',  (req, res) => {
  Usuarios.findAll().then((usuario) => {
    res.json(usuario)
  }).catch((err) => {
    console.log(err)
  })
  
}); //Listar todos

router.post('/', (req, res) => {
  Usuarios.create({
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
    id_empreendimento: req.body.id_empreendimento
  }).then((usuario) => {
    console.log(usuario)
    res.redirect('/usuarios')
  }).catch((err) => {
    console.log(err)
  })
  
}); // Criar

router.get('/:email', (req, res) => {
  Usuarios.findOne({
    where: {
      email: req.params.email
    }
  }).then((usuario) => {
    res.json(usuario)
  }).then((err) => {
    console.log(err)
  })
  
}); //Buscar

router.put('/:email', (req, res) => {
  Usuarios.update({
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha
  }, {
    where: {
      email: req.params.email
    }
  }).then((usuario) => {
    res.redirect('/')
  }).catch((err) => {
    console.log(err)
  })
}); //Editar

router.delete('/:email', (req, res) => {
  Usuarios.destroy({
    where: {
      email: req.params.email
    }
  }).then((usuario) => {
    console.log('usuario excluído', usuario.id)
    res.redirect('/')
  }).catch((err) => {
    console.log(err)
  })
}); //Deletar

module.exports = router
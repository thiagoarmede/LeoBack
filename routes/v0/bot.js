var express = require('express');
var router = express.Router();

/* GET requests*/
router.get('/', function(req, res, next) {
  res.json({ message: 'api call get' });
});


router.get('/groups', function(req, res, next) {
  res.json({
    error: false,
    response:[{
      "id" : "5a3fbe7127433010741cab97",
      "nome" : "Economia 101",
      "descricao" : "lets go play with the market",
      "inviteLink" : "http://join.me/economy101",
      "grupoDeDisciplina" : true
    }]
  })
});

router.get('/groups/:groupId', function(req, res, next) {
  res.json({
    error: false,
    response: {
      "id" : "5a3fbe7127433010741cab97",
      "nome" : "Economia 101",
      "descricao" : "lets go play with the market",
      "inviteLink" : "http://join.me/economy101",
      "grupoDeDisciplina" : true
    }
  })
});

router.get('/tests/', function(req, res, next) {
  res.json({
    error: false,
    response: [{
      "id" : "5a3fcebc27433010741cab9f",
      "disciplina" : "5a3fcbb427433010741cab9d",
      "nome" : "trabalho pratico 1",
      "valor" : 10.0,
      "descricao" : "trabalho pratico, amostra do nivel lexico",
      "dataInicio" : 1514131097.0,
      "dataFinal" : null
    }]
  })
});

router.get('/tests/:testId', function(req, res, next) {
  res.json({
    error: false,
    response: {
      "id" : "5a3fcebc27433010741cab9f",
      "disciplina" : "5a3fcbb427433010741cab9d",
      "nome" : "trabalho pratico 1",
      "valor" : 10.0,
      "descricao" : "trabalho pratico, amostra do nivel lexico",
      "dataInicio" : 1514131097.0,
      "dataFinal" : null
    }
  })
});

router.get('/announcements/', function(req, res, next) {
  res.json({
    error: false,
    response: [{
      "id" : "5a3fb3fe27433010741cab95",
      "titulo" : "Greve geral",
      "mensagem" : "uneb de portões fechados entre dia 22 e dia 31, não venham pra aula.",
      "link" : "http://www.sitedagreve.com.br"
    }]
  })
});

router.get('/announcements/:announcementsId', function(req, res, next) {
  res.json({
    error: false,
    response: {
      "id" : "5a3fb3fe27433010741cab95",
      "titulo" : "Greve geral",
      "mensagem" : "uneb de portões fechados entre dia 22 e dia 31, não venham pra aula.",
      "link" : "http://www.sitedagreve.com.br"
    }
  })
});








/* post home page. */
router.post('/', function(req, res, next) {
  res.json({ message: 'api call post' });
});

/* delete home page. */
router.delete('/', function(req, res, next) {
  res.json({ message: 'api call delete' });
});

/* put home page. */
router.put('/', function(req, res, next) {
  res.json({ message: 'api call put' });
});





module.exports = router;

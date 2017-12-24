var express = require('express');
var router = express.Router();


router.get('/users/', function(req, res, next) {
  res.json({
    error: false,
    response: [{
      "id" : "5a3fc94d27433010741cab99",
      "username" : "year_2028",
      "nome" : "kevin oliveira",
      "dataCriacao" : 1514129680.0
    }]
  });
});


router.get('/users/:userId', function(req, res, next) {
  res.json({
    error: false,
    response: {
      "id" : "5a3fc94d27433010741cab99",
      "username" : "year_2028",
      "nome" : "kevin oliveira",
      "dataCriacao" : 1514129680.0
    }
  });
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


router.get('/classes/', function(req, res, next) {
  res.json({
    error: false,
    response: [{
      "id" : "5a3fcbb427433010741cab9d",
      "nome" : "compiladores",
      "optativa" : false,
      "professor" : {
        "id" : "5a39d1a6196a8e41f0857f75",
        "nome" : "antonio atta fontes",
        "apelidos" : [
          "atta",
          "darth vader"
        ],
        "email" : "atta@uneb.br",
        "tefone" : null,
        "curriculumLates" : "https://www.google.com"
      }
    }]
  })
});

router.get('/classes/:classesId', function(req, res, next) {
  res.json({
    error: false,
    response: {
      "id" : "5a3fcbb427433010741cab9d",
      "nome" : "compiladores",
      "optativa" : false,
      "professor" : {
        "id" : "5a39d1a6196a8e41f0857f75",
        "nome" : "antonio atta fontes",
        "apelidos" : [
          "atta",
          "darth vader"
        ],
        "email" : "atta@uneb.br",
        "tefone" : null,
        "curriculumLates" : "https://www.google.com"
      }
    }
  })
});


router.get('/events/', function(req, res, next) {
  res.json({
    error: false,
    response: [{
      "id" : "5a3fb20427433010741cab8f",
      "nome" : "evento",
      "descricao" : "bla bla bla bla bla bla bla",
      "pago" : true,
      "dataInicio" : "2015-10-26T07:46:36.611Z",
      "dataFinal" : "2015-10-26T07:46:36.611Z",
      "linkInfo" : "http://www.google.com"
    }]
  })
});

router.get('/events/:eventsId', function(req, res, next) {
  res.json({
    error: false,
    response: {
      "id" : "5a3fb20427433010741cab8f",
      "nome" : "evento",
      "descricao" : "bla bla bla bla bla bla bla",
      "pago" : true,
      "dataInicio" : "2015-10-26T07:46:36.611Z",
      "dataFinal" : "2015-10-26T07:46:36.611Z",
      "linkInfo" : "http://www.google.com"
    }
  })
});


router.get('/info/', function(req, res, next) {
  res.json({
    error: false,
    response: [{
      "id" : "5a3fb2ed27433010741cab92",
      "nome" : "proposta de horario proximo semestre",
      "descricao" : "bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
      "link" : "http://www.google.com"
    }]
  })
});

router.get('/info/:infoId', function(req, res, next) {
  res.json({
    error: false,
    response: {
      "id" : "5a3fb2ed27433010741cab92",
      "nome" : "proposta de horario proximo semestre",
      "descricao" : "bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
      "link" : "http://www.google.com"
    }
  })
});


router.get('/teachers/', function(req, res, next) {
  res.json({
    error: false,
    response: [{
        "id" : "5a39d1a6196a8e41f0857f75",
        "nome" : "antonio atta fontes",
        "apelidos" : [
          "atta",
          "darth vader"
        ],
        "email" : "atta@uneb.br",
        "tefone" : null,
        "curriculumLates" : "https://www.google.com"
      }]
  })
});

router.get('/teachers/:teachersId', function(req, res, next) {
  res.json({
    error: false,
    response: {
        "id" : "5a39d1a6196a8e41f0857f75",
        "nome" : "antonio atta fontes",
        "apelidos" : [
          "atta",
          "darth vader"
        ],
        "email" : "atta@uneb.br",
        "tefone" : null,
        "curriculumLates" : "https://www.google.com"
      }
  })
});


router.get('/oldtests/', function(req, res, next) {
  res.json({
    error: false,
    response: [{
      "id" : "5a3fcd3c27433010741cab9e",
      "disciplina" : {
        "id" : "5a3fcbb427433010741cab9d",
        "nome" : "compiladores",
        "optativa" : false,
        "professor" : {
          "id" : "5a39d1a6196a8e41f0857f75",
          "nome" : "antonio atta fontes",
          "apelidos" : [
            "atta",
            "darth vader"
          ],
          "email" : "atta@uneb.br",
          "tefone" : null,
          "curriculumLates" : "https://www.google.com"
        }
      },
      "ano" : 2017.0,
      "linkPdf" : "http://www.gdrive.com/si/compiladores/2017/prova1"
    }]
  })
});

router.get('/oldtests/:oldtestsId', function(req, res, next) {
  res.json({
    error: false,
    response: {
      "id" : "5a3fcd3c27433010741cab9e",
      "disciplina" : {
        "id" : "5a3fcbb427433010741cab9d",
        "nome" : "compiladores",
        "optativa" : false,
        "professor" : {
          "id" : "5a39d1a6196a8e41f0857f75",
          "nome" : "antonio atta fontes",
          "apelidos" : [
            "atta",
            "darth vader"
          ],
          "email" : "atta@uneb.br",
          "tefone" : null,
          "curriculumLates" : "https://www.google.com"
        }
      },
      "ano" : 2017.0,
      "linkPdf" : "http://www.gdrive.com/si/compiladores/2017/prova1"
    }
  })
});


router.get('/finaltests/', function(req, res, next) {
  res.json({
    error: false,
    response: [{
      "id" : "5a3fcfb927433010741caba0",
      "disciplina" : {
        "id" : "5a3fcbb427433010741cab9d",
        "nome" : "compiladores",
        "optativa" : false,
        "professor" : {
          "id" : "5a39d1a6196a8e41f0857f75",
          "nome" : "antonio atta fontes",
          "apelidos" : [
            "atta",
            "darth vader"
          ],
          "email" : "atta@uneb.br",
          "tefone" : null,
          "curriculumLates" : "https://www.google.com"
        }
      },
      "data": 1514131097
    }]
  })
});

router.get('/finaltests/:finaltestsId', function(req, res, next) {
  res.json({
    error: false,
    response: {
      "id" : "5a3fcfb927433010741caba0",
      "disciplina" : {
        "id" : "5a3fcbb427433010741cab9d",
        "nome" : "compiladores",
        "optativa" : false,
        "professor" : {
          "id" : "5a39d1a6196a8e41f0857f75",
          "nome" : "antonio atta fontes",
          "apelidos" : [
            "atta",
            "darth vader"
          ],
          "email" : "atta@uneb.br",
          "tefone" : null,
          "curriculumLates" : "https://www.google.com"
        }
      },
      "data": 1514131097
    }
  })
});

// for creations
router.post('/users/', function(req, res, next) {
  res.status(201)
  res.json({
    error: false,
    response: {
      "id" : "5a3fc94d27433010741cab99",
      "username" : "year_2028",
      "nome" : "kevin oliveira",
      "dataCriacao" : 1514129680.0
    }
  });
});


module.exports = router;

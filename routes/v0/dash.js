var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(500).json({ error: 'Fatal error' });
});

router.post('/teachers', (req, res, next)=>{
  if( req.is('application/json') ){

    let newTeacher = new req.app.locals.models.teachers(
      {
        nome : req.body.nome,
        apelidos : req.body.apelidos,
        email : req.body.email,
        telefone : req.body.telefone,
        curriculumLates : req.body.curriculumLates
      }
    );

    newTeacher.save().then(item=>{
      res.status(201).json({ok: true, id: item.id});
    }).catch(err =>{
      res.json({ok: false});
    })
    

  }else{
    res.status(400).json({ok: false, message: "invalid body content type"});
  }

})



module.exports = router;

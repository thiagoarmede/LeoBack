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
        name : req.body.name,
        nicknames : req.body.nicknames,
        email : req.body.email,
        phone : req.body.phone,
        curriculumLates : req.body.curriculumLates
      }
    );

    newTeacher.save().then(item=>{
      res.status(201).json({ok: true, id: item.id});
    }).catch(err =>{
      res.json({ok: false, message: err.message});
    })
    

  }else{
    res.status(400).json({ok: false, message: "invalid body content type"});
  }

})



module.exports = router;

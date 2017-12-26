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

router.post('/tests', (req, res, next)=>{
  if( req.is('application/json') ){

    let newTest = new req.app.locals.models.tests(
      {
        class : req.body.class,
        name : req.body.name,
        value : req.body.value,
        description : req.body.description,
        startDate : req.body.startDate,
        endDate : req.body.endDate,
      }
    );

    newTest.save().then(item=>{
      res.status(201).json({ok: true, id: item.id});
    }).catch(err =>{
      res.json({ok: false, message: err.message});
    })
    

  }else{
    res.status(400).json({ok: false, message: "invalid body content type"});
  }

})

router.post('/announcements', (req, res, next)=>{
  if( req.is('application/json') ){

    let newAnnouncement = new req.app.locals.models.announcements(
      {
        title: req.body.title,
        message: req.body.message,
        link: req.body.link,
        data: req.body.data,
      }
    );

    newAnnouncement.save().then(item=>{
      res.status(201).json({ok: true, id: item.id});
    }).catch(err =>{
      res.json({ok: false, message: err.message});
    })
    

  }else{
    res.status(400).json({ok: false, message: "invalid body content type"});
  }

})

router.post('/classes', (req, res, next)=>{
  if( req.is('application/json') ){

    let newClass = new req.app.locals.models.classes(
      {
        name: req.body.name,
        optional: req.body.optional,
        teacher: req.body.teacher,
      }
    );

    newClass.save().then(item=>{
      res.status(201).json({ok: true, id: item.id});
    }).catch(err =>{
      res.json({ok: false, message: err.message});
    })
    

  }else{
    res.status(400).json({ok: false, message: "invalid body content type"});
  }

})

router.post('/events', (req, res, next)=>{
  if( req.is('application/json') ){

    let newEvent = new req.app.locals.models.events(
      {
        name: req.body.name,
        description: req.body.description,
        paid: req.body.paid,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        link: req.body.link,
      }
    );

    newEvent.save().then(item=>{
      res.status(201).json({ok: true, id: item.id});
    }).catch(err =>{
      res.json({ok: false, message: err.message});
    })
    

  }else{
    res.status(400).json({ok: false, message: "invalid body content type"});
  }

})

router.post('/groups', (req, res, next)=>{
  if( req.is('application/json') ){

    let newGroup = new req.app.locals.models.groups(
      {
        name: req.body.name,
        description: req.body.description,
        inviteLink: req.body.inviteLink,
        classGroup: req.body.classGroup,
      }
    );

    newGroup.save().then(item=>{
      res.status(201).json({ok: true, id: item.id});
    }).catch(err =>{
      res.json({ok: false, message: err.message});
    })
    

  }else{
    res.status(400).json({ok: false, message: "invalid body content type"});
  }

})

router.post('/info', (req, res, next)=>{
  if( req.is('application/json') ){

    let newInfo = new req.app.locals.models.info(
      {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
      }
    );

    newInfo.save().then(item=>{
      res.status(201).json({ok: true, id: item.id});
    }).catch(err =>{
      res.json({ok: false, message: err.message});
    })
    

  }else{
    res.status(400).json({ok: false, message: "invalid body content type"});
  }

})


router.post('/message', (req, res, next)=>{
  if( req.is('application/json') ){

    let newMessage = new req.app.locals.models.message(
      {
        user: req.body.user,
        date: req.body.date,
        message: req.body.message,
      }
    );

    newMessage.save().then(item=>{
      res.status(201).json({ok: true, id: item.id});
    }).catch(err =>{
      res.json({ok: false, message: err.message});
    })
    

  }else{
    res.status(400).json({ok: false, message: "invalid body content type"});
  }

})


router.post('/oldtests', (req, res, next)=>{
  if( req.is('application/json') ){

    let newOldTests = new req.app.locals.models.oldtests(
      {
        class: req.body.class,
        year: req.body.year,
        link: req.body.link,
      }
    );

    newOldTests.save().then(item=>{
      res.status(201).json({ok: true, id: item.id});
    }).catch(err =>{
      res.json({ok: false, message: err.message});
    })
    

  }else{
    res.status(400).json({ok: false, message: "invalid body content type"});
  }

})

router.post('/finaltests', (req, res, next)=>{
  if( req.is('application/json') ){

    let newFinalTest = new req.app.locals.models.finaltests(
      {
        class: req.body.class,
        date: req.body.date,
      }
    );

    newFinalTest.save().then(item=>{
      res.status(201).json({ok: true, id: item.id});
    }).catch(err =>{
      res.json({ok: false, message: err.message});
    })
    

  }else{
    res.status(400).json({ok: false, message: "invalid body content type"});
  }

})

router.post('/users', (req, res, next)=>{
  if( req.is('application/json') ){

    let newFinalTest = new req.app.locals.models.users(
      {
        userName: req.body.userName,
        telegramHash: req.body.telegramHash,
        name: req.body.name,
        createdAt: req.body.createdAt,
      }
    );

    newFinalTest.save().then(item=>{
      res.status(201).json({ok: true, id: item.id});
    }).catch(err =>{
      res.json({ok: false, message: err.message});
    })
    

  }else{
    res.status(400).json({ok: false, message: "invalid body content type"});
  }

})



module.exports = router;

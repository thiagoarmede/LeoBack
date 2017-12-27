var express = require('express');
var router = express.Router();



// router.get('/kitten', function (req, res, next){
//   let kittens = [];
//   req.app.locals.models.kittens.find(function (err, DBkittens){
//     kittens = DBkittens;
//   }).then(something => {
//     console.log(something);
//     res.json({ok: true, response: kittens});
//   }).catch(err=>{
//     res.json({ok: false, message: err.message});
//   })
// });

// router.get('/kitten/:kittenName', function(req, res, next){

//   let myData = new req.app.locals.models.kittens({name: req.params.kittenName});
//   myData.save().then(item =>{
//     res.json({ok: true, name: req.params.kittenName});
//   }).catch(err =>{
//     res.json({ok: false, message: err.message});
//   })
// })



router.get('/users/', function(req, res, next) {
  req.app.locals.models.users.find(function (err, DBusers){
  }).then(users => {
    // console.log(users);
    res.json({ok: true, response: users});
  }).catch(err => {
    res.json({ok: false, message: err.message});
  });
});

router.get('/users/:userId', function(req, res, next) {
  req.app.locals.models.users.findOne({_id: req.params.userId},(err,DBuser)=>{
    // nothing
  }).then(user=>{
    res.json({ok: true, response: user});
  }).catch(err=>{
    res.json({ok: false, message: err.message});
  })
});


router.get('/groups', function(req, res, next) {
  req.app.locals.models.groups.find(function (err, DBGroups){
  }).then(groups => {
    // console.log(groups);
    res.json({ok: true, response: groups});
  }).catch(err => {
    res.json({ok: false, message: err.message});
  });
});

router.get('/groups/:groupId', function(req, res, next) {
  req.app.locals.models.groups.findOne({_id: req.params.groupId},(err,DBgroup)=>{
    // nothing
  }).then(group=>{
    res.json({ok: true, response: group});
  }).catch(err=>{
    res.json({ok: false, message: err.message});
  })
});


router.get('/tests/', function(req, res, next) {
  req.app.locals.models.tests.find(function (err, DBTests){
  }).then(tests => {
    // console.log(tests);
    res.json({ok: true, response: tests});
  }).catch(err => {
    res.json({ok: false, message: err.message});
  });
});

router.get('/tests/:testId', function(req, res, next) {
  req.app.locals.models.tests.findOne({_id: req.params.testId},(err,DBTests)=>{
    // nothing
  }).then(tests=>{
    res.json({ok: true, response: tests});
  }).catch(err=>{
    res.json({ok: false, message: err.message});
  })
});


router.get('/announcements/', function(req, res, next) {
  req.app.locals.models.announcements.find(function (err, DBAnnouncements){
  }).then(announcements => {
    // console.log(tests);
    res.json({ok: true, response: announcements});
  }).catch(err => {
    res.json({ok: false, message: err.message});
  });
});

router.get('/announcements/:announcementsId', function(req, res, next) {
  req.app.locals.models.announcements.findOne({_id: req.params.announcementsId},(err,DBAnnouncements)=>{
    // nothing
  }).then(announcements=>{
    res.json({ok: true, response: announcements});
  }).catch(err=>{
    res.json({ok: false, message: err.message});
  })
});


router.get('/classes/', function(req, res, next) {
  req.app.locals.models.classes.find(function (err, DBclasses){
  }).then(classes => {
    // console.log(tests);
    res.json({ok: true, response: classes});
  }).catch(err => {
    res.json({ok: false, message: err.message});
  });
});

router.get('/classes/:classesId', function(req, res, next) {
  req.app.locals.models.classes.findOne({_id: req.params.classesId},(err,DBclasses)=>{
    // nothing
  }).then(classes=>{
    res.json({ok: true, response: classes});
  }).catch(err=>{
    res.json({ok: false, message: err.message});
  })
});


router.get('/events/', function(req, res, next) {
  req.app.locals.models.events.find(function (err, DBevents){
  }).then(events => {
    // console.log(tests);
    res.json({ok: true, response: events});
  }).catch(err => {
    res.json({ok: false, message: err.message});
  });
});

router.get('/events/:eventsId', function(req, res, next) {
  req.app.locals.models.events.findOne({_id: req.params.eventsId},(err,DBevents)=>{
    // nothing
  }).then(events=>{
    res.json({ok: true, response: events});
  }).catch(err=>{
    res.json({ok: false, message: err.message});
  })
});


router.get('/info/', function(req, res, next) {
  req.app.locals.models.info.find(function (err, DBinfo){
  }).then(info => {
    // console.log(tests);
    res.json({ok: true, response: info});
  }).catch(err => {
    res.json({ok: false, message: err.message});
  });
});

router.get('/info/:infoId', function(req, res, next) {
  req.app.locals.models.info.findOne({_id: req.params.infoId},(err,DBinfo)=>{
    // nothing
  }).then(info=>{
    res.json({ok: true, response: info});
  }).catch(err=>{
    res.json({ok: false, message: err.message});
  })
});


router.get('/teachers/', function(req, res, next) {
  req.app.locals.models.teachers.find(function (err, DBteachers){
  }).then(teachers => {
    // console.log(tests);
    res.json({ok: true, response: teachers});
  }).catch(err => {
    res.json({ok: false, message: err.message});
  });
});

router.get('/teachers/:teachersId', function(req, res, next) {
  req.app.locals.models.teachers.findOne({_id: req.params.teachersId},(err,DBteachers)=>{
    // nothing
  }).then(teachers=>{
    res.json({ok: true, response: teachers});
  }).catch(err=>{
    res.json({ok: false, message: err.message});
  })
});

router.get('/oldtests/:class', function(req, res, next) {
  req.app.locals.models.oldtests.findOne({'class': new RegExpr('^'+req.params.class, 'i')},(err,DBoldtests)=>{
    // nothing
  }).then(oldtests=>{
    res.json({ok: true, response: oldtests});
    console.log(oldstests)
  }).catch(err=>{
    res.json({ok: false, message: err.message});
  })
});

router.get('/oldtests/', function(req, res, next) {
  req.app.locals.models.oldtests.find(function (err, DBoldtests){
  }).then(oldtests => {
    // console.log(tests);
    res.json({ok: true, response: oldtests});
  }).catch(err => {
    res.json({ok: false, message: err.message});
  });
});

router.get('/oldtests/:oldtestsId', function(req, res, next) {
  req.app.locals.models.oldtests.findOne({_id: req.params.oldtestsId},(err,DBoldtests)=>{
    // nothing
  }).then(oldtests=>{
    res.json({ok: true, response: oldtests});
  }).catch(err=>{
    res.json({ok: false, message: err.message});
  })
});

router.get('/finaltests/', function(req, res, next) {
  req.app.locals.models.finaltests.find(function (err, DBfinaltests){
  }).then(finaltests => {
    // console.log(tests);
    res.json({ok: true, response: finaltests});
  }).catch(err => {
    res.json({ok: false, message: err.message});
  });
});

router.get('/finaltests/:finaltestsId', function(req, res, next) {
  req.app.locals.models.finaltests.findOne({_id: req.params.finaltestsId},(err,DBfinaltests)=>{
    // nothing
  }).then(finaltests=>{
    res.json({ok: true, response: finaltests});
  }).catch(err=>{
    res.json({ok: false, message: err.message});
  })
});

// for creations
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

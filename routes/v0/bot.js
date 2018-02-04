var express = require("express");
var _ = require("lodash");
var router = express.Router();

router.get("/users/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  req.app.locals.models.users
    .find(function(err, DBusers) {})
    .then(users => {
      // console.log(users);
      res.json({ ok: true, response: users });
      return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.get("/users/:userId", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  req.app.locals.models.users
    .findOne({ _id: req.params.userId }, (err, DBuser) => {
      // nothing
    })
    .then(user => {
      res.json({ ok: true, response: user });
      return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.get("/groups", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  req.app.locals.models.groups
    .find(function(err, DBGroups) {})
    .then(groups => {
      // console.log(groups);
      res.json({ ok: true, response: groups });
      return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.get("/groups/:groupId", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  req.app.locals.models.groups
    .findOne({ _id: req.params.groupId }, (err, DBgroup) => {
      // nothing
    })
    .then(group => {
      res.json({ ok: true, response: group });
      return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.get("/tests/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  req.app.locals.models.tests
    .find(function(err, DBTests) {})
    .then(tests => {
      // console.log(tests);
      res.json({ ok: true, response: tests });
      return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.get("/tests/:testId", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  req.app.locals.models.tests
    .findOne({ _id: req.params.testId }, (err, DBTests) => {
      // nothing
    })
    .then(tests => {
      res.json({ ok: true, response: tests });
      return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.get("/announcements/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  req.app.locals.models.announcements
    .find(function(err, DBAnnouncements) {})
    .then(announcements => {
      // console.log(tests);
      res.json({ ok: true, response: announcements });
      return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.get("/announcements/:announcementsId", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  req.app.locals.models.announcements
    .findOne({ _id: req.params.announcementsId }, (err, DBAnnouncements) => {
      // nothing
    })
    .then(announcements => {
      res.json({ ok: true, response: announcements });
      return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.get("/classes/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  req.app.locals.models.classes
    .find(function(err, DBclasses) {})
    .then(classes => {
      // console.log(classes);
      let promissesArray = classes.map(oneClass => {
        return req.app.locals.models.teachers.findById(oneClass.teacher);
      });

      Promise.all(promissesArray)
        .then(teachers => {
          //  console.log(teachers);
          let classesVector = classes.map((oneClass, i) => {
            return {
              id: oneClass._id,
              name: oneClass.name,
              optional: oneClass.optional,
              teacher: {
                id: teachers[i].id,
                name: teachers[i].name,
                email: teachers[i].email,
                phone: teachers[i].phone,
                curriculumLates: teachers[i].curriculumLates
              }
            };
          });

          res.json({ ok: true, response: classesVector });
          return;
        })
        .catch(err => {
          res.json({ ok: false, message: err.message });
          return;
        });

      // res.json({ok: true, response: classes});
      // return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.get("/find/classes/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  req.app.locals.models.classes
    .find({ name: new RegExp("^" + req.query.class, "igm") }, function(
      err,
      DBclasses
    ) {})
    .then(classes => {
      // console.log(classes);
      let promissesArray = classes.map(oneClass => {
        return req.app.locals.models.teachers.findById(oneClass.teacher);
      });

      Promise.all(promissesArray)
        .then(teachers => {
          //  console.log(teachers);
          let classesVector = classes.map((oneClass, i) => {
            return {
              id: oneClass._id,
              name: oneClass.name,
              optional: oneClass.optional,
              teacher: {
                id: teachers[i].id,
                name: teachers[i].name,
                email: teachers[i].email,
                phone: teachers[i].phone,
                curriculumLates: teachers[i].curriculumLates
              }
            };
          });

          res.json({ ok: true, response: classesVector });
          return;
        })
        .catch(err => {
          res.json({ ok: false, message: err.message });
          return;
        });

      // res.json({ok: true, response: classes});
      // return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.get("/classes/:classesId", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  req.app.locals.models.classes
    .findOne({ _id: req.params.classesId }, (err, DBclasses) => {
      // nothing
    })
    .then(classes => {
      req.app.locals.models.teachers
        .findById(classes.teacher, function(err, DBteacher) {})
        .then(teacher => {
          // classes.teacher = teacher;
          res.json({
            ok: true,
            response: {
              id: classes._id,
              name: classes.name,
              optional: classes.optional,
              teacher: {
                id: teacher.id,
                name: teacher.name,
                email: teacher.email,
                phone: teacher.phone,
                curriculumLates: teacher.curriculumLates
              }
            }
          });
          return;
        })
        .catch(err => {
          res.json({ ok: false, message: err.message });
          return;
        });

      // res.json({ok: true, response: classes});
      // return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.get("/events/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  req.app.locals.models.events
    .find(function(err, DBevents) {})
    .then(events => {
      // console.log(tests);
      res.json({ ok: true, response: events });
      return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.get("/events/:eventsId", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  req.app.locals.models.events
    .findOne({ _id: req.params.eventsId }, (err, DBevents) => {
      // nothing
    })
    .then(events => {
      res.json({ ok: true, response: events });
      return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.get("/info/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  req.app.locals.models.info
    .find(function(err, DBinfo) {})
    .then(info => {
      // console.log(tests);
      res.json({ ok: true, response: info });
      return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.get("/info/:infoId", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  req.app.locals.models.info
    .findOne({ _id: req.params.infoId }, (err, DBinfo) => {
      // nothing
    })
    .then(info => {
      res.json({ ok: true, response: info });
      return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.get("/teachers/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  req.app.locals.models.teachers
    .find(function(err, DBteachers) {})
    .then(teachers => {
      // console.log(tests);
      res.json({ ok: true, response: teachers });
      return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.get("/teachers/:teachersId", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  req.app.locals.models.teachers
    .findOne({ _id: req.params.teachersId }, (err, DBteachers) => {
      // nothing
    })
    .then(teachers => {
      res.json({ ok: true, response: teachers });
      return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.get("/find/oldtests/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // console.log("Param =>", req.query.class);

  req.app.locals.models.classes
    .findOne(
      {
        name: new RegExp("^" + req.query.class, "igm")
      },
      (err, DBoldtests) => {
        // nothing
      }
    )
    .then(returnedClass => {
      req.app.locals.models.teachers
        .findById(returnedClass.teacher)
        .then(teacher => {
          req.app.locals.models.oldtests
            .find({ class: returnedClass.id })
            .then(oldtests => {
              let oldTestsVector = oldtests.map((oldTest, i) => {
                return {
                  id: oldTest._id,
                  year: oldTest.year,
                  link: oldTest.link,
                  name: oldTest.name,
                  class: {
                    id: returnedClass._id,
                    name: returnedClass.name,
                    optional: returnedClass.optional,
                    teacher: {
                      id: teacher._id,
                      name: teacher.name,
                      email: teacher.email,
                      phone: teacher.phone,
                      curriculumLates: teacher.curriculumLates
                    }
                  }
                };
              });

              res.json({ ok: true, response: oldTestsVector });
              return;
            })
            .catch(err => {
              res.json({ ok: false, response: err.message });
              return;
            });
        })
        .catch(err => {
          res.json({ ok: false, response: err.message });
          return;
        });
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.get("/oldtests/classes", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  // var oldtests = [];
  // oldtests[0] = req.app.locals.models.oldtests.find({});

  req.app.locals.models.oldtests
    .find({})
    .then(oldtests => {
      var classesPromisses = oldtests.map(oldtest =>
        req.app.locals.models.classes.findById(oldtest.class)
      );
      Promise.all(classesPromisses)
        .then(classes => {
          
          // var reponse = classes.map(oneClass => {
            // return { id: oneClass._id, name: oneClass.name };
          // });

        //  response = reponse.filter((item,i )=>{
        //    return reponse.findIndex(e =>{
        //     return e.toString() == item.toString()}) != i;
        //  })

        var response = new Set();
        classes.map(oneClass => {
          response.add(oneClass.name);
        });



          res.json({ ok: true, response: Array.from(response) });
          return;
        })
        .catch(err => {
          res.json({ ok: false, message: err.message });
          return;
        });
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });

  // req.app.locals.models.oldtests
  //   .find(function(err, DBoldtests) {})
  //   .then(oldtests => {
  //     // console.log(oldtests);
  //     let promissesArrayClasses = oldtests.map(oldTest => {
  //       return req.app.locals.models.classes.findById(oldTest.class);
  //     });

  //     Promise.all(promissesArrayClasses)
  //       .then(classes => {
  //         // console.log(classes);
  //         let promissesArrayTeacher = classes.map(oneClass => {
  //           return req.app.locals.models.teachers.findById(oneClass.teacher);
  //         });
  //         Promise.all(promissesArrayTeacher)
  //           .then(teachers => {
  //             let oldTestsVector = oldtests.map((oldTest, i) => {
  //               return {
  //                 id: oldTest._id,
  //                 year: oldTest.year,
  //                 link: oldTest.link,
  //                 name: oldTest.name,
  //                 class: {
  //                   id: classes[i]._id,
  //                   name: classes[i].name,
  //                   optional: classes[i].optional,
  //                   teacher: {
  //                     id: teachers[i]._id,
  //                     name: teachers[i].name,
  //                     email: teachers[i].email,
  //                     phone: teachers[i].phone,
  //                     curriculumLates: teachers[i].curriculumLates
  //                   }
  //                 }
  //               };
  //             });
  //             res.json({ ok: true, response: oldTestsVector });
  //             return;
  //           })
  //           .catch(err => {
  //             res.json({ ok: false, message: err.message });
  //             return;
  //           });
  //       })
  //       .catch(err => {
  //         res.json({ ok: false, message: err.message });
  //         return;
  //       });

  //     // res.json({ok: true, response: oldtests});
  //     // return;
  //   })
  //   .catch(err => {
  //     res.json({ ok: false, message: err.message });
  //     return;
  //   });
});

router.get("/oldtests/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  req.app.locals.models.oldtests
    .find(function(err, DBoldtests) {})
    .then(oldtests => {
      // console.log(oldtests);
      let promissesArrayClasses = oldtests.map(oldTest => {
        return req.app.locals.models.classes.findById(oldTest.class);
      });

      Promise.all(promissesArrayClasses)
        .then(classes => {
          // console.log(classes);
          let promissesArrayTeacher = classes.map(oneClass => {
            return req.app.locals.models.teachers.findById(oneClass.teacher);
          });
          Promise.all(promissesArrayTeacher)
            .then(teachers => {
              let oldTestsVector = oldtests.map((oldTest, i) => {
                return {
                  id: oldTest._id,
                  year: oldTest.year,
                  link: oldTest.link,
                  name: oldTest.name,
                  class: {
                    id: classes[i]._id,
                    name: classes[i].name,
                    optional: classes[i].optional,
                    teacher: {
                      id: teachers[i]._id,
                      name: teachers[i].name,
                      email: teachers[i].email,
                      phone: teachers[i].phone,
                      curriculumLates: teachers[i].curriculumLates
                    }
                  }
                };
              });
              res.json({ ok: true, response: oldTestsVector });
              return;
            })
            .catch(err => {
              res.json({ ok: false, message: err.message });
              return;
            });
        })
        .catch(err => {
          res.json({ ok: false, message: err.message });
          return;
        });

      // res.json({ok: true, response: oldtests});
      // return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.get("/oldtests/:oldtestsId", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  req.app.locals.models.oldtests
    .findOne({ _id: req.params.oldtestsId }, (err, DBoldtests) => {
      // nothing
    })
    .then(oldtests => {
      res.json({ ok: true, response: oldtests });
      return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.get("/finaltests/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  req.app.locals.models.finaltests
    .find(function(err, DBfinaltests) {})
    .then(finaltests => {
      // console.log(tests);
      res.json({ ok: true, response: finaltests });
      return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.get("/finaltests/:finaltestsId", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  req.app.locals.models.finaltests
    .findOne({ _id: req.params.finaltestsId }, (err, DBfinaltests) => {
      // nothing
    })
    .then(finaltests => {
      res.json({ ok: true, response: finaltests });
      return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

// for creations
router.post("/users", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  if (req.is("application/json")) {
    let newFinalTest = new req.app.locals.models.users({
      userName: req.body.userName,
      telegramHash: req.body.telegramHash,
      name: req.body.name,
      createdAt: new Date()
    });

    newFinalTest
      .save()
      .then(item => {
        res.status(201).json({ ok: true, id: item.id });
        return;
      })
      .catch(err => {
        res.json({ ok: false, message: err.message });
        return;
      });
  } else {
    res.status(400).json({ ok: false, message: "invalid body content type" });
    return;
  }
});

module.exports = router;

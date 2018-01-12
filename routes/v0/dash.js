var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(500).json({ error: "Fatal error" });
  return;
});

router.post("/teachers", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  if (req.is("application/json")) {
    let newTeacher = new req.app.locals.models.teachers({
      name: req.body.name,
      nicknames: req.body.nicknames,
      email: req.body.email,
      phone: req.body.phone,
      curriculumLates: req.body.curriculumLates
    });

    newTeacher
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

router.delete("/teachers/:teachersId", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  req.app.locals.models.teachers
    .findOne({ _id: req.params.teachersId }, (err, DBteachers) => {
      // nothing
    })
    .remove()
    .then(teachers => {
      res.json({ ok: true });
      return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.post("/tests", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  if (req.is("application/json")) {
    let newTest = new req.app.locals.models.tests({
      class: req.body.class,
      name: req.body.name,
      value: req.body.value,
      description: req.body.description,
      startDate: req.body.startDate,
      endDate: req.body.endDate
    });

    newTest
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

router.post("/announcements", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  if (req.is("application/json")) {
    let newAnnouncement = new req.app.locals.models.announcements({
      title: req.body.title,
      message: req.body.message,
      link: req.body.link,
      data: req.body.data
    });

    newAnnouncement
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

router.post("/classes", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  if (req.is("application/json")) {
    let newClass = new req.app.locals.models.classes({
      name: req.body.name,
      optional: req.body.optional,
      teacher: req.body.teacher
    });

    newClass
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

router.delete("/classes/:classesId", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  req.app.locals.models.classes
    .findOne({ _id: req.params.classesId }, (err, DBclasses) => {
      // nothing
    })
    .remove()
    .then(classes => {
      res.json({ ok: true });
      return;
    })
    .catch(err => {
      res.json({ ok: false, message: err.message });
      return;
    });
});

router.post("/events", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  if (req.is("application/json")) {
    let newEvent = new req.app.locals.models.events({
      name: req.body.name,
      description: req.body.description,
      paid: req.body.paid,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      link: req.body.link
    });

    newEvent
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

router.post("/groups", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  if (req.is("application/json")) {
    let newGroup = new req.app.locals.models.groups({
      name: req.body.name,
      description: req.body.description,
      inviteLink: req.body.inviteLink,
      classGroup: req.body.classGroup
    });

    newGroup
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

router.post("/info", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  if (req.is("application/json")) {
    let newInfo = new req.app.locals.models.info({
      name: req.body.name,
      description: req.body.description,
      link: req.body.link
    });

    newInfo
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

router.post("/message", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  if (req.is("application/json")) {
    let newMessage = new req.app.locals.models.message({
      user: req.body.user,
      date: req.body.date,
      message: req.body.message
    });

    newMessage
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

router.post("/oldtests", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  if (req.is("application/json")) {
    let newOldTests = new req.app.locals.models.oldtests({
      class: req.body.class,
      year: req.body.year,
      link: req.body.link,
      name: req.body.name
    });

    newOldTests
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

router.post("/finaltests", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  if (req.is("application/json")) {
    let newFinalTest = new req.app.locals.models.finaltests({
      class: req.body.class,
      date: req.body.date
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

var config = require("../others/config");
var mongoose = require("mongoose");

var createDataBaseConnection = () => {
  mongoose.connect(config.databaseURI);

  var db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));

  db.once("open", function() {
    console.log("Connected to database!");
  });
};

var Schemas = {
  tests: mongoose.Schema({
    class: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      min: [0, "Evento com valor negativo"],
      max: [1000, "Niguem vai pagar por isso"]
    },
    description: {
      type: String
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date
    }
  }),

  teachers: mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    nicknames: {
      type: Array
    },
    email: {
      type: String
    },
    phone: {
      type: String
    },
    curriculumLates: {
      type: String,
      required: true
    }
  }),

  announcements: mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    link: {
      type: String
    },
    date: {
      type: Date,
      required: true
    },
    delivered:{
      type: Boolean,
      required: true
    }
  }),

  classes: mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    optional: {
      type: Boolean,
      required: true
    },
    teacher: {
      type: String,
      required: true
    }
  }),

  events: mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    paid: {
      type: Boolean
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date
    },
    link: {
      type: String
    }
  }),

  groups: mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    inviteLink: {
      type: String,
      required: true
    },
    classGroup: {
      type: Boolean,
      required: true
    }
  }),

  info: mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String
    } 
  }),

  message: mongoose.Schema({
    user: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  }),

  oldtests: mongoose.Schema({
    class: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }),

  finaltests: mongoose.Schema({
    class: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  }),

  users: mongoose.Schema({
    userName: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 32,
      match: [/([a-z]|[A-Z]|\d|_)+/, "what brother?"],
      unique: true
    },
    telegramHash: {
      type: String,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      required: true
    }
  }),

  dashboardUser: mongoose.Schema({
    username: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 32,
      match: [/([a-z]|\d|_)+/, "what brother?"],
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 32
    },
    isAdmin: {
      type: Boolean,
      require: true
    }
  }),
};

var ColectionsNames = {
  tests: "tests",
  // kittens: 'kittens',
  teachers: "teachers",
  users: "users",
  groups: "groups",
  announcements: "announcements",
  classes: "classes",
  events: "events",
  info: "info",
  oldtests: "oldtests",
  finaltests: "finaltests",
  message: "messages",
  dashUsers: "dashboard_users",
};

var Models = {
  tests: mongoose.model(ColectionsNames.tests, Schemas.tests),
  teachers: mongoose.model(ColectionsNames.teachers, Schemas.teachers),
  users: mongoose.model(ColectionsNames.users, Schemas.users),
  groups: mongoose.model(ColectionsNames.groups, Schemas.groups),
  announcements: mongoose.model(
    ColectionsNames.announcements,
    Schemas.announcements
  ),
  classes: mongoose.model(ColectionsNames.classes, Schemas.classes),
  events: mongoose.model(ColectionsNames.events, Schemas.events),
  info: mongoose.model(ColectionsNames.info, Schemas.info),
  oldtests: mongoose.model(ColectionsNames.oldtests, Schemas.oldtests),
  finaltests: mongoose.model(ColectionsNames.finaltests, Schemas.finaltests),
  message: mongoose.model(ColectionsNames.message, Schemas.message),
  dashUsers: mongoose.model(ColectionsNames.dashUsers, Schemas.dashboardUser),

  // tests: mongoose.model(ColectionsNames.tests, Schemas.tests),
  // // kittens: mongoose.model(ColectionsNames.kittens, Schemas.kittens),
  // teachers: mongoose.model(ColectionsNames.teachers, Schemas.teachers),
};

module.exports = {
  connect: createDataBaseConnection,
  models: Models
};

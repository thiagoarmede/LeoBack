// import { Schema } from 'mongoose';


var mongoose = require('mongoose');



var createDataBaseConnection = ()=>{

  mongoose.connect('mongodb://localhost:27017/Leonardo');

  var db = mongoose.connection;

  db.on('error', console.error.bind(console,'connection error:'));

  db.once('open', function(){
    console.log("Connected to database!");
  });

}

var Schemas = {
  tests: mongoose.Schema({
    class : String,
    name : String,
    value : Number,
    description : String,
    startDate : Date,
    endDate : Date
  }),

  // kittens: mongoose.Schema({
  //   name: String,
  // }),

  teachers: mongoose.Schema({
    name: String,
    nicknames: Array,
    email: String,
    phone: String,
    curriculumLates: String,
  }),

  announcements: mongoose.Schema({
    title: String,
    message: String,
    link: String,
    data: Date,
  }),

  classes: mongoose.Schema({
    name: String,
    optional: Boolean,
    teacher: String,
  }),

  events: mongoose.Schema({
    name: String,
    description: String,
    paid: Boolean,
    startDate: Date,
    endDate: Date,
    link: String,
  }),

  groups: mongoose.Schema({
    name: String,
    description: String,
    inviteLink: String,
    classGroup: Boolean,
  }),

  info: mongoose.Schema({
    name: String,
    description: String,
    link: String,
  }),

  message: mongoose.Schema({
    user: String,
    date: Date,
    message: String,
  }),

  oldtests: mongoose.Schema({
    class: String,
    year: Number,
    link: String,
  }),

  finaltests: mongoose.Schema({
    class: String,
    date: Date,
  }),

  users: mongoose.Schema({
    userName: String,
    telegramHash: String,
    name: String,
    createdAt: Date,
  })


}

var ColectionsNames ={
  tests: 'tests',
  // kittens: 'kittens',
  teachers: 'teachers',
  users: 'users',
  groups: 'groups',
  announcements: 'announcements',
  classes: 'classes',
  events: 'events',
  info: 'info',
  oldtests: 'oldtests',
  finaltests: 'finaltests',
  message: 'messages',
}

var Models = {
  tests: mongoose.model(ColectionsNames.tests, Schemas.tests),
  teachers: mongoose.model(ColectionsNames.teachers, Schemas.teachers),
  users: mongoose.model(ColectionsNames.users, Schemas.users),
  groups: mongoose.model(ColectionsNames.groups, Schemas.groups),
  announcements: mongoose.model(ColectionsNames.announcements, Schemas.announcements),
  classes: mongoose.model(ColectionsNames.classes, Schemas.classes),
  events: mongoose.model(ColectionsNames.events, Schemas.events),
  info: mongoose.model(ColectionsNames.info, Schemas.info),
  oldtests: mongoose.model(ColectionsNames.oldtests, Schemas.oldtests),
  finaltests: mongoose.model(ColectionsNames.finaltests, Schemas.finaltests),
  message: mongoose.model(ColectionsNames.message, Schemas.message),
  
  // tests: mongoose.model(ColectionsNames.tests, Schemas.tests),
  // // kittens: mongoose.model(ColectionsNames.kittens, Schemas.kittens),
  // teachers: mongoose.model(ColectionsNames.teachers, Schemas.teachers),
}


module.exports = {
  connect: createDataBaseConnection,
  models: Models,
}


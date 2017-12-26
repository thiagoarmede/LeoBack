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
    id: String,
    disciplina : String,
    nome : String,
    valor : Number,
    descricao : String,
    dataInicio : Number,
    dataFinal : Number
  }),

  // kittens: mongoose.Schema({
  //   name: String,
  // }),

  teachers: mongoose.Schema({
    nome: String,
    apelidos: Array,
    email: String,
    telefone: String,
    curriculumLates: String,
  }),


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

  // tests: mongoose.model(ColectionsNames.tests, Schemas.tests),
  // // kittens: mongoose.model(ColectionsNames.kittens, Schemas.kittens),
  // teachers: mongoose.model(ColectionsNames.teachers, Schemas.teachers),
}


module.exports = {
  connect: createDataBaseConnection,
  models: Models,
}


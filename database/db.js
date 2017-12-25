
var mongoose = require('mongoose');




// app.locals.kittenSchama = mongoose.Schema({
//   name: String,
// },{
//   versionKey: false
// });

var createDataBaseConnection = ()=>{

  mongoose.connect('mongodb://localhost:27017/Leonardo');
  var db = mongoose.connection;
  db.on('error', console.error.bind(console,'connection error:'));
  db.once('open', function(){
    console.log("Here we are!");
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
  kittens: mongoose.Schema({
    name: String,
})
}

var ColectionsNames ={
  tests: 'avaliacoes',
  kittens: 'kittens'
}

var Models = {
  tests: mongoose.model(ColectionsNames.tests, Schemas.tests),
  kittens: mongoose.model(ColectionsNames.kittens, Schemas.kittens)
}


module.exports = {
  connect: createDataBaseConnection,
  models: Models
}


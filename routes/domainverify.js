var express = require("express");
var router = express.Router();



router.get("/", function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.status(500).json({ error: "Fatal error" });
    res.sendfile("index.html");
    return;
  });


router.get(".well-known/acme-challenge/75w5MlMJOK185LIqEmn581uj9ppt4jluCcx-N-MxgoE", function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.status(500).json({ error: "Fatal error" });
    res.sendfile("others/75w5MlMJOK185LIqEmn581uj9ppt4jluCcx-N-MxgoE");
    return;
  });



  router.get(".well-known/acme-challenge/q0Ut9ukmdqnCFuRmZnbLVsPPKbZUE5H9tYyoatMeuN4", function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.status(500).json({ error: "Fatal error" });
    res.sendfile("others/q0Ut9ukmdqnCFuRmZnbLVsPPKbZUE5H9tYyoatMeuN4");
    return;
  });

  
  module.exports = router;

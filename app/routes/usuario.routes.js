module.exports = app => {
    const tutorials = require("../controllers/usuario.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tutorials.create);
  
    app.use('/api/tutorials', router);
  };
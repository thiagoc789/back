module.exports = app => {
    const evento = require("../controllers/evento.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Gusto
    router.post("/", evento.create);
  
    app.use('/api/evento', router);
  };
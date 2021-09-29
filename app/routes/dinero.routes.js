module.exports = app => {
    const dinero = require("../controllers/dinero.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Gusto
    router.post("/", dinero.create);
  
    app.use('/api/dinero', router);
  };
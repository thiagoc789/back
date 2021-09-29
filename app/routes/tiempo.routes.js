module.exports = app => {
    const tiempo = require("../controllers/tiempo.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tiempo.create);
  
    app.use('/api/tiempo', router);
  };
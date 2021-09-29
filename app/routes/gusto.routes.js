module.exports = app => {
    const gusto = require("../controllers/gusto.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Gusto
    router.post("/", gusto.create);
  
    app.use('/api/gusto', router);
  };
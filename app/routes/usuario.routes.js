module.exports = app => {
    const usuario = require("../controllers/usuario.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", usuario.create);
  
    app.use('/api/usuario', router);
  };
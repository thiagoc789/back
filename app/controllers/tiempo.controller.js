const db = require("../models");
const Tiempo = db.tiempo;
const Op = db.Sequelize.Op;

// Create and Save a new Usuario
exports.create = (req, res) => {
    // Validate request
    if (!req.body.tiempom) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Usuario
    const tiempo = {
      tiempom: req.body.tiempom,
      generom: req.body.generom,
      tiempop: req.body.tiempop,
      generop: req.body.generop,
      tiempod: req.body.tiempod,
      equipo: req.body.equipo,
      
    };
  
    // Save Usuario in the database
    Tiempo.create(tiempo)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Gusto."
        });
      });
  };
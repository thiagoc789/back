const db = require("../models");
const Dinero = db.dinero;
const Op = db.Sequelize.Op;

// Create and Save a new Usuario
exports.create = (req, res) => {
    // Validate request
    if (!req.body.comida) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Usuario
    const dinero = {
      comida: req.body.comida,
      bebida: req.body.bebida,
      tiempo_disponible: req.body.tiempo_disponible,
      dinero: req.body.dinero,
      
    };
  
    // Save Usuario in the database
    Dinero.create(dinero)
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
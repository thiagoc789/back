const db = require("../models");
const Gusto = db.gusto;
const Op = db.Sequelize.Op;

// Create and Save a new Usuario
exports.create = (req, res) => {
    // Validate request
    if (!req.body.estrato) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Usuario
    const gusto = {
      estrato: req.body.estrato,
      escolaridad: req.body.escolaridad,
      hijos: req.body.hijos,
      transporte: req.body.transporte,
      ingresos: req.body.ingresos
      
    };
  
    // Save Usuario in the database
    Gusto.create(gusto)
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
const db = require("../models");
const Evento = db.evento;
const Op = db.Sequelize.Op;

// Create and Save a new Usuario
exports.create = (req, res) => {
    // Validate request
    if (!req.body.evento) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Usuario
    const evento = {
      evento: req.body.evento,
      actividad: req.body.actividad,
      tv: req.body.tv,
      deporte: req.body.deporte,
      fisica: req.body.fisica
      
    };
  
    // Save Usuario in the database
    Evento.create(evento)
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
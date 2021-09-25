const db = require("../models");
const Usuario = db.usuarios;
const Op = db.Sequelize.Op;

// Create and Save a new Usuario
exports.create = (req, res) => {
    // Validate request
    if (!req.body.cedula) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Usuario
    const usuario = {
      cedula: req.body.cedula,
      nombre: req.body.nombre,
      edad: req.body.edad,
      sexo: req.body.sexo,
      ciudad: req.body.ciudad,
      telefono: req.body.telefono
    };
  
    // Save Usuario in the database
    Usuario.create(usuario)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Usuario."
        });
      });
  };


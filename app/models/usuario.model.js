module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define("usuario", {
    cedula: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING
    },
    edad: {
      type: Sequelize.INTEGER
    },

    sexo: {
      type: Sequelize.STRING
    },

    ciudad: {
      type: Sequelize.STRING
    },

    telefono: {
      type: Sequelize.INTEGER
    }
  });

  return Usuario;
};
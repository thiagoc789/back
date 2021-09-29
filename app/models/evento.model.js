module.exports = (sequelize, Sequelize) => {
    const Evento = sequelize.define("evento", {
      evento: {
        type: Sequelize.STRING,
       
      },
      actividad: {
        type: Sequelize.STRING
      },
      tv: {
        type: Sequelize.STRING
      },
  
      deporte: {
        type: Sequelize.STRING
      },
  
      fisica: {
        type: Sequelize.STRING
      }
    });
  
    return Evento;
  };
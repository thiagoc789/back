module.exports = (sequelize, Sequelize) => {
    const Evento = sequelize.define("actividades_preferidas", {
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
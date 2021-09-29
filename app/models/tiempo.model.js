module.exports = (sequelize, Sequelize) => {
    const Tiempo = sequelize.define("tiempo", {
      tiempom: {
        type: Sequelize.STRING,
       
      },
      generom: {
        type: Sequelize.STRING
      },
      tiempop: {
        type: Sequelize.STRING
      },
  
      generop: {
        type: Sequelize.STRING
      },
  
      tiempod: {
        type: Sequelize.STRING
      },

      equipo: {
        type: Sequelize.STRING
      },
    });
  
    return Tiempo;
  };
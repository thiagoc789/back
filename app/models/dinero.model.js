module.exports = (sequelize, Sequelize) => {
    const Dinero = sequelize.define("disponibilidad", {
      comida: {
        type: Sequelize.STRING,
       
      },
      bebida: {
        type: Sequelize.STRING
      },
      tiempo_disponible: {
        type: Sequelize.STRING
      },
  
      dinero: {
        type: Sequelize.STRING
      },
  
    });
  
    return Dinero;
  };
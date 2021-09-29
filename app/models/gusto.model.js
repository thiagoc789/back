module.exports = (sequelize, Sequelize) => {
    const Gusto = sequelize.define("gusto", {
      estrato: {
        type: Sequelize.INTEGER,
       
      },
      escolaridad: {
        type: Sequelize.STRING
      },
      hijos: {
        type: Sequelize.STRING
      },
  
      transporte: {
        type: Sequelize.STRING
      },
  
      ingresos: {
        type: Sequelize.STRING
      }
    });
  
    return Gusto;
  };
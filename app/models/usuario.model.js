module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuarios", {
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
        // don't add the timestamp attributes (updatedAt, createdAt)

    },{
      tableName: 'prueba',
      timestamps: false,

      // If don't want createdAt
      createdAt: false,
    
      // If don't want updatedAt
      updatedAt: false,
    });
  
    return Usuario;
  };
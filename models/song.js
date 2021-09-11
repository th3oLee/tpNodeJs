module.exports = (sequelize, Sequelize) => {
    const Song = sequelize.define("song", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
      genre: {
        type: Sequelize.STRING,
      },
      titre: {
        type: Sequelize.STRING,
      },
      duree: {
        type: Sequelize.INTEGER,
        validate: {
          min: 0,
          max: 5400,
        },
      },
      auteur: {
        type: Sequelize.STRING,
      },
    });
  
    return Song;
  };
  
module.exports = {
    HOST: "localhost",
    USER: "tlejeune",
    PASSWORD: "root",
    DB: "tpSong",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
  
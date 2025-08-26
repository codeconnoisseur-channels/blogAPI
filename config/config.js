require("dotenv").config();
module.exports = {
  development: {
    username: process.env.cha,
    password: process.env.chan,
    database: process.env.chann,
    host: process.env.host,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};

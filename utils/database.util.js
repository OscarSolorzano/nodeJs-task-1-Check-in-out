const { Sequelize, DataTypes } = require('sequelize');

//Establish db connection

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'Alexander#98',
  port: '5432',
  database: 'registrations',
  logging: false,
});

module.exports = { db, DataTypes };

const { db, DataTypes } = require('../utils/database.util');

const Registration = db.define('registration', {
  id: {},
  entranceTime: {},
  exitTime: {},
  status: {},
});

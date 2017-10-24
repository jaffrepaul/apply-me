const Sequelize = require('sequelize');
const sequelize = require('../db/db');

const User = sequelize.define('user', {
  userId: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  resume: {
    type: Sequelize.TEXT,
  },
  resumeURL: {
    type: Sequelize.STRING,
  },
  skills: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: [],
  },
  githubUsername: {
    type: Sequelize.STRING,
  },
  githubSkills: {
    type: Sequelize.JSON,
    defaultValue: {},
  },
  emailReminder: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});

// User.sync();
module.exports = User;

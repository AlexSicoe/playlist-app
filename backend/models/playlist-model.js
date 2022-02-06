module.exports = (sequelize, Sequelize) => {
  return sequelize.define('playlist', {
    description: {
      type: Sequelize.STRING,
      allowNull: false
      //TODO string of at least 3 characters
    },
    createdAt: {
      type: Sequelize.DATETIME, //definitely check this, lol
      type: Sequelize.DATE, defaultValue: Sequelize.NOW
    }
  })
}
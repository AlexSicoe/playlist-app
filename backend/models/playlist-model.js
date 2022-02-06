module.exports = (sequelize, DataTypes) => {
  return sequelize.define('playlist', {
    description: {
      type: DataTypes.STRING,
      allowNull: false
      //TODO string of at least 3 characters
    },
    createdAt: {
      type: DataTypes.DATETIME, //definitely check this, lol
      type: Sequelize.DATE, defaultValue: Sequelize.NOW
    }
  })
}
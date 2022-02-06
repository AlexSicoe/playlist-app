module.exports = (sequelize, DataTypes) => {
  return sequelize.define('video', {
    description: {
      type: DataTypes.STRING,
      // allowNull: false
      //TODO string of at least 5 characters
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
      //TODO string of at least 5 characters
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    }


  })
}
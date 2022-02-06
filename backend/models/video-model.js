module.exports = (sequelize, Sequelize) => {
  return sequelize.define('video', {
    description: {
      type: Sequelize.STRING,
      // allowNull: false
      //TODO string of at least 5 characters
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
      //TODO string of at least 5 characters
    },
    url: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    }


  })
}
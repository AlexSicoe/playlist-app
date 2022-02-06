const Sequelize = require('sequelize')
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'videoville.db',
  define: {
    timestamps: false
  }
})

let db = {
  connection: sequelize,
  Playlist: require('./playlist-model')(sequelize, Sequelize),
  Video: require('./video-model')(sequelize, Sequelize)
}

db.Playlist.hasMany(db.Video)

module.exports = db


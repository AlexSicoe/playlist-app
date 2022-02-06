const fs = require('fs')
const Sequelize = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'videoville.db',
  define: {
    timestamps: false
  }
})

let db = {}
fs.readdirSync(__dirname).forEach(file => {
  if(file !== 'index.js') {
    let keyName = file.split('.')[0].split('-')[0]
    keyName = keyName[0].toUpperCase() + keyName.slice(1, keyName.length)
    let moduleName = file.split('.')[0]
    db[keyName] = sequelize.import(moduleName)
  }
})

db.Playlist.hasMany(db.Video)

module.exports = db



const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const models = require('../models')

const errors = {
  SERVER_ERROR: { message: 'server error' },
  NOT_FOUND: { message: 'not found' }
}

router.get('/playlists', async (req, res) => {
  try {
    let playlists
    if (req.query && req.query.filter) {
      playlists = await models.Playlist.findAll({
        where: {
          name: {
            [Op.like]: `%${req.query.filter}%`
          }
        }
      })
    } else {
      playlists = await models.Playlist.findAll()
    }
  } catch (err) {
    console.warn(err)
    res.status(500).json(errors.SERVER_ERROR)
  }
})

router.get('/playlists/:id', async (req, res) => {
  try {
    let playlist = await models.Playlist.findByPk(req.params.id)
    if (playlist) {
      res.status(200).json(playlist)
    } else {
      res.status(404).json(errors.NOT_FOUND)
    }
  } catch (err) {
    console.warn(err)
    res.status(500).json(errors.SERVER_ERROR)
  }
})

router.post('/playlists', async (req, res) => {
  try {
    if (req.query.bulk && req.query.bulk == 'on') {
      let playlists = await models.Playlist.bulkCreate(req.body)
      res.status(201).json(playlists)
    } else {
      let playlist = await models.Playlist.create(req.body)
      res.status(201).json(playlist)
    }
  } catch (err) {
    console.warn(err.stack)
    res.status(500).json(errors.SERVER_ERROR)
  }
})

router.put('/playlists/:id', async (req, res) => {
  try {
    let playlist = await models.Playlist.findByPk(req.params.id)
    if (playlist) {
      let modifiedPlaylist = await playlist.update(req.body)
      res.status(202).json(modifiedPlaylist)
    } else {
      res.status(404).json(errors.NOT_FOUND)
    }
  } catch (err) {
    console.warn(err)
    res.status(500).json(errors.SERVER_ERROR)
  }
})

router.delete('/playlists/:id', async (req, res) => {
  try {
    let playlist = await models.Playlist.findByPk(req.params.id)
    if (playlist) {
      await playlist.destroy()
      res.status(202).json(playlist)
    } else {
      res.status(404).json(errors.NOT_FOUND)
    }
  } catch (err) {
    console.warn(err)
    res.status(500).json(errors.SERVER_ERROR)
  }
})


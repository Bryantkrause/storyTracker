const { model, Schema } = require('mongoose')

const Character = require('./Character.js')(model, Schema)
const DungeonMaster = require('./DungeonMaster.js')(model, Schema)
const User = require('./User.js')(model, Schema)

module.exports = { Character, DungeonMaster, User }
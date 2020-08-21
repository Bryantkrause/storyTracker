const DungeonMaster = require("./DungeonMaster")

module.exports = (model, Schema) => {
    const Character = new Schema({
      name: String,
      level: Number,
      proficiency: Number,
      speed: Number,
      initiative: Number,
      ac: Number,
      health: Number,
      attackModifiers: Object,
      race: String,
      age: Number,
      abilityScore: Object,
      color: String,
      user: { type: Schema.Types.ObjectId, ref: 'User' },
    })
  
    return model('Character', Character)
  }
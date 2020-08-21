const DungeonMaster = require("./DungeonMaster")

module.exports = (model, Schema) => {
    const Gosling = new Schema({
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
      dungeonMaster: { type: Schema.Types.ObjectId, ref: 'DungeonMaster' }
    })
  
    return model('Gosling', Gosling)
  }
module.exports = (model, Schema) => {
    const Gosling = new Schema({
      name: String,
      age: Number,
      neckLength: Number,
      color: String,
      character: { type: Schema.Types.ObjectId, ref: 'Character' },
      dungeonMaster: { type: Schema.Types.ObjectId, ref: 'DungeonMaster' }
    })
  
    return model('Gosling', Gosling)
  }
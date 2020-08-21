module.exports = (model, Schema) => {

    const Goose = new Schema({
      age: Number,
      campaign: String,
      encounter: String,
      region: String,
      isGolden: Boolean,
      title: {
        type: String,
        uppercase: true,
      },
      characters: [{ type: Schema.Types.ObjectId, ref: 'Characters' }],
      users: [{ type: Schema.Types.ObjectId, ref: 'Users' }]
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'goosechange' } })
  
    return model('Goose', Goose)
  }
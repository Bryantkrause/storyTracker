const { Character, User } = require('../models')

module.exports = app => {

  // GET all character
  app.get('/character', (req, res) => {
    Character.find()
      .populate('user')
      .then(characters => res.json(characters))
      .catch(e => console.error(e))
  })

    // GET one character
    app.get('/character/:id', (req, res) => {
        Character.findOne({ _id: req.params.id })
          .populate('user')
          .then(characters => res.json(characters))
          .catch(e => console.error(e))
      })

  // POST one character
  app.post('/character', (req, res) => {
    Character.create(req.body)
      .then(({ _id }) => {
        User.updateOne({ 
          _id: req.body.user 
        }, { 
          $push: {
            character: _id
          }
        })
          .then(() => res.sendStatus(200))
          .catch(e => console.error(e))
      })
      .catch(e => console.error(e))
  })
}

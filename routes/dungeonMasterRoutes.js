const { DungeonMaster } = require('../models')

module.exports = app => {

  // GET all dungeonMaster
  app.get('/dungeonMaster', (req, res) => {
    DungeonMaster.find()
      .populate('user')
      .then(dms => res.json(dms))
      .catch(e => console.error(e))
  })

    // GET one dungeonMaster
    app.get('/dungeonMaster/:id', (req, res) => {
        DungeonMaster.findOne({ _id: req.params.id })
          .populate('user')
          .then(dms => res.json(dms))
          .catch(e => console.error(e))
      })

  // POST one dungeonMaster
  app.post('/dungeonMaster', (req, res) => {
    DungeonMaster.create(req.body)
          .then( r => console.log(res.json(r)))
          .catch(e => console.error(e))

  })


    // update one dungeonMaster
    app.put('/dungeonMaster/:id', (req, res) => {
      console.log("dungeonMaster put route hit")
      DungeonMaster.updateOne({ _id: req.params.id }, { $set: req.body })
        .then( r => console.log(res.json(r)))
        .catch(e => console.log(e))
    })

        // remove one dungeonMaster
        app.delete('/dungeonMaster/:id', (req, res) => {
            DungeonMaster.deleteOne({ _id: req.params.id })
              .then(dm => res.json(dm))
              .catch(e => console.log(e))
      })
    }

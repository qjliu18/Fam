const express = require('express');
const config = require('../config/database');
const Reco = require('../models/reco');

const router = express.Router();

router.post('/addReco', (req, res) => {

  let newReco = new Reco({
    username: req.body.username,
    name: req.body.loc,
    title: req.body.name,
    lat: req.body.lat,
    lng: req.body.lng,
    stars: req.body.star,
    categ: req.body.categ,
    desc: req.body.desc,
    direct: req.body.direct
  });

  Reco.addReco(newReco, (err, user) => {
    // console.log(newReco.name);
    if(err) {
      res.json({success: false, msg: 'Failed to add new Reco'});
    } else {
      res.json({success: true, msg: 'Added new Reco'});
    }
  });
});

router.get('/getReco', (req, res) => {

  Reco.getReco((err, recos) => {
    if(err) {
      throw err;
    } else {
      res.json(recos);
    }
  });
})

module.exports = router;

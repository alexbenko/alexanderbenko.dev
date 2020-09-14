const express = require('express');
const controller = require('./controller.js');
const router = express.Router();

router.route('/test')
.get((req,res)=>{
  res.status(201).send('Test Works')
})

router.route('/skills')
.get(controller.getSkillImages)


module.exports = router
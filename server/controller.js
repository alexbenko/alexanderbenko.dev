const fs = require('fs');

const controller = {
  getSkillImages(req,res){
    fs.readdir('./images/skills/',(err,images)=>{
      if(err){
        console.error(err)
        res.status(404).send('Error Reading Image Dir')
      }
      //removes .ds store from the array
      images.shift()
      res.status(200).send(images)
    })
  }

}

module.exports = controller



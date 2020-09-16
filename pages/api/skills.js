import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'
import fs from 'fs';

const cors = initMiddleware(
  Cors({
    // Only allow requests with GET
    methods: ['GET'],
  })
)

export default async function handler(req,res){
  await cors(req, res)

  return new Promise((resolve,reject)=>{
    fs.readdir('./images/skills/',(err,images)=>{
      if(err){
        console.error(err)
        res.status(404).json('Error Reading Image Dir')
        resolve()
      }
      //removes .DS_Store from the array if it exists
      if(images.includes('.DS_Store')){
        images.shift()
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(images)
      resolve();
    })
  })
}
import React, { useState, useEffect } from 'react';

//I am self hosting images using a plug in for Nextjs that optimizes images
//This component has 2 steps
  //1. It loads a really low pixel version of the image, I apply a blur filter to make it look nicer
  //2. After .6 seconds, It loads the full image since it will be downloaded by then
const Image = ({ file, name}) =>{
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>setLoading(false),550)
  })

  return (
      <div className={`${name}-container`} style={{textAlign:'center',padding:'15px'}}>
        {loading ?
          <img className={`${name}-blur`} src={require(`../images/${file}?lqip`)} alt={`${file.split('.'[0])}`}/> :
          <img className={`${name}`} src={require(`../images/${file}?webp?resize&size=800`)} alt={`${file.split('.'[0])}`}/>
        }
      </div>
    );
}

export default Image
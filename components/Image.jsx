import React, { useState, useEffect } from 'react';

const Image = ({ file }) =>{
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>setLoading(false),500)
  })

  return (
      <div className='welcome-image-container' style={{textAlign:'center',padding:'15px'}}>
        {loading ?
          <img className="welcome-image-blur" src={require(`../images/${file}?lqip`)} alt={`${file.split('.'[0])}`}/> :
          <img className="welcome-image" src={require(`../images/${file}?webp?resize&size=400`)} alt={`${file.split('.'[0])}`}/>
        }
      </div>
    );
}

export default Image
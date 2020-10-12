import React, { useState, useEffect } from 'react';

const Image = ({ file, name}) =>{
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>setLoading(false),850)
  })

  return (
      <div className={`${name}-container`} style={{textAlign:'center',padding:'15px'}}>
        {loading ?
          <img className={`${name}-blur`} src={require(`../images/${file}?lqip`)} alt={`${file.split('.'[0])}`}/> :
          <img className={`${name}`} src={require(`../images/${file}?webp?resize&size=400`)} alt={`${file.split('.'[0])}`}/>
        }
      </div>
    );
}

export default Image
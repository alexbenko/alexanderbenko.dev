import React from 'react';

const Image = ({ file }) =>{
  return (
      <div className='welcome-image-container' style={{textAlign:'center'}}>

            <img className="welcome-image" src={require(`../images/${file}?webp`)} alt={`${file.split('.'[0])}`}/>

      </div>
    );
}

export default Image
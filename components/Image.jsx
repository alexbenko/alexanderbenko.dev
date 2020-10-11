import React from 'react';

const Image = ({ file }) =>{
  return (
      <div className='welcome-image-container' style={{textAlign:'center'}}>
        <picture className="welcome-image" >
            <source className="welcome-image" srcSet={require(`../images/${file}?webp`)} type="image/webp" />
            <source className="welcome-image" srcSet={require(`../images/${file}?webp`)} type="image/jpeg" />
            <img className="welcome-image" src={require(`../images/${file}?webp`)} alt={`${file.split('.'[0])}`}/>
          </picture>
      </div>
    );
}

export default Image
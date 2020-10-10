import React from 'react';

//component needs to be passsed a file path, but allows an optinal style object and a function
const Image = ({ file }) =>{

  return (
      <div className='image-container' style={{margin:'0 auto',textAlign:'center'}}>
        <picture className="welcome-image" >
            <source className="welcome-image" srcSet={require(`../images/${file}?webp`)} type="image/webp" />
            <source className="welcome-image" srcSet={require(`../images/${file}?webp`)} type="image/jpeg" />
            <img className="welcome-image" src={require(`../images/${file}?webp`)} alt={`${file.split('.'[0])}`}/>
          </picture>
      </div>
    );


}

export default Image
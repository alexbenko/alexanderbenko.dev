import React from 'react';

//component needs to be passsed a file path, but allows an optinal style object and a function
const Image = ({file,styling={},func=(file)=>alert(file),name="image-container"}) =>{

  return (
      <div className='image-container' onClick={()=> func(file)}>
        <picture style={styling}>
          <source srcSet={require(`../images/${file}?webp`)} style={styling} type="image/webp" />
          <source srcSet={require(`../images/${file}`)} style={styling} type="image/jpeg" />
          <img src={require(`../images/${file}`)} style={styling} alt={`${file.split('.')[0]}`}/>
        </picture>
        <p style={{textTransform: 'capitalize'}}>{`${file.split('.')[0].split('/')[1]}`}</p>
      </div>
    );


}

export default Image
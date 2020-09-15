import React from 'react';

const Image = ({file,styling={}}) =>{
  return (
    <div className="image-container">
      <picture style={styling}>
        <source srcSet={require(`../images/${file}?webp`)} style={styling} type="image/webp" />
        <source srcSet={require(`../images/${file}`)} style={styling} type="image/jpeg" />
        <img src={require(`../images/${file}`)} style={styling} alt={`${file.split('.')[0]}`}/>
      </picture>
    </div>
  );

}

export default Image
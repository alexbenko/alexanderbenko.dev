import React from 'react';

const Image = ({file}) =>{
  return (
    <div className="image-container">
      <picture>
        <source srcSet={require(`../images/${file}?webp`)} type="image/webp" />
        <source srcSet={require(`../images/${file}`)} type="image/jpeg" />
        <img src={require(`../images/${file}`)} alt={`${file.split('.')[0]}`}/>
      </picture>
    </div>
  );

}

export default Image
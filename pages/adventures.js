import React, { useState, useEffect } from "react";
import axios from 'axios';
import Image from '../components/Image.jsx';
import MyLayout from "../layouts/Layout";
import Head from 'next/head';
import {useSpring, animated} from 'react-spring';

//React.useLayoutEffect = React.useEffect;

const Adventures = () =>{
  const [gallery, setGallery] = useState([]);
  const [current,setCurrent] = useState('agate.jpg');

  useEffect(() => {
    axios.get('/api/adventures')
    .then((res)=>{
     setGallery(res.data)
    })
    .catch(err => console.error(err))
  },[]);

  const previousImg = ()=>{
    let currentIdx = gallery.indexOf(current);
    //if current image is first in the gallery
    if(current === gallery[0]){
      //set current image to last image
      setCurrent(gallery[gallery.length - 1])
    } else {
      setCurrent(gallery[currentIdx - 1])
    }
  };

  const nextImg = ()=>{
    let currentIdx = gallery.indexOf(current);
    //if current equals last image of gallery
    if(current === gallery[gallery.length - 1]){
      // set current to first image
      setCurrent(gallery[0])
    } else{
      setCurrent(gallery[currentIdx + 1])
    }
  }

  const imgStyle = {
    width: '25em',
    height: 'auto',
    cursor:'pointer'
  };

  let button = {
    backgroundColor:'#32CD32',
    border: 'none',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius:'15%',
    margin: '10px 0'
  };
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  return(
    <div className="adventures" style={{paddingBottom:'40%'}} >
      <Head>
        <title>Alexander Benko</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/adventures.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet"/>
      </Head>

      <div className="current-image-holder" style={{textAlign:'center'}}>
        <h3>My Adventures</h3>
        <h3>Click one of the buttons to cycle through images!</h3>
        <p>{`${gallery.indexOf(current) + 1} out of ${gallery.length}`}</p>

        <animated.div style={props}>
          <picture className='current'>
            <source className='current' srcSet={require(`../images/adventures/${current}?webp`)}  type="image/webp" />
            <source className='current' srcSet={require(`../images/adventures/${current}`)}  type="image/jpeg" />
            <img className='current' src={require(`../images/adventures/${current}`)} alt={`${current.split('.')[0]}`}/>
          </picture>

          <div style={{display:'flex',flexDirection:'row',justifyContent:'center',bottom:'100'}}>
            <button style={button} onClick={()=>previousImg()}>Previous</button>
            <button style={button} onClick={()=>nextImg()}>Next</button>
          </div>
        </animated.div>


      </div>

      {/*<div className="image-gallery" style={{paddingLeft:"10%"}}>
        {gallery.map((img,i)=>{
          return(
            <Image key={i} file={'adventures/' + img} styling={imgStyle} func={(file)=>setCurrent(file.split('/')[1])}/>
          )
        })}
      </div>*/}

    </div>
  )
}

Adventures.Layout = MyLayout;
export default Adventures;
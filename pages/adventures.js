import React, { useState, useEffect } from "react";
import axios from 'axios';
import Image from '../components/Image.jsx';
import MyLayout from "../layouts/Layout";
import Head from 'next/head';
//import {useSpring, animated} from 'react-spring';

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

  const imgStyle = {
    width: '25em',
    height: 'auto',
    cursor:'pointer'
  };

  //const props = useSpring({opacity: 1, from: {opacity: 0}})
  return(
    <div className="adventures" style={{paddingBottom:'45%'}} >
      <Head>
        <title>Alexander Benko</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/adventures.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet"/>
      </Head>



      <Image file={'adventures/' + current} styling={{width:'25%',height:'auto'}}/>
      <div style={{paddingLeft:"10%"}}>
        {gallery.map((img,i)=>{
          return(
            <Image key={i} file={'adventures/' + img} styling={imgStyle} func={(file)=>setCurrent(file.split('/')[1])}/>
          )
        })}
      </div>

    </div>
  )
}

Adventures.Layout = MyLayout;
export default Adventures;
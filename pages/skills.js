import React, { useState, useEffect } from "react";
import MyLayout from "../layouts/Layout";
import Image from '../components/Image.jsx';
import axios from 'axios';
import Head from 'next/head';
import {useSpring, animated} from 'react-spring'

const Skills = ()=>{
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('/api/skills')
    .then((res)=>{
      setImages(res.data)
    })
    .catch(err => console.error(err))
  },[]);



  const imgStyle = {
    verticalAlign: 'middle',
    width: '50%',
    height: 'auto',
  };

  const props = useSpring({opacity: 1, from: {opacity: 0}})
    return(
      <animated.div className="skills" style={props}>
        <Head>
          <title>Alexander Benko</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="shortcut icon" href="/skills.ico" />
        </Head>

        <div className="skill-imgages"  style={{paddingLeft:"10%",display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10%', gridAutoRows: 'minMax(10%, auto)'}}>
          {images.map((image,i)=>{
            return(
              <Image file={'skills/' + image} styling={imgStyle} key={i}/>
            )})}
        </div>
      </animated.div >
    )
}

Skills.Layout = MyLayout;

export default Skills;
import React from 'react'
import MyLayout from "../layouts/Layout";
import Head from 'next/head';
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import {useSpring,animated,useTrail} from 'react-spring'

const Index = ()=>{
  const props = useSpring({opacity: 1, from: {opacity: 0}});
  const welcomeMessage = ['Hello !','My Name is Alexander Benko','I learned how to code in a National Park','And Welcome to my Website'];
  const config = { mass: 5, tension: 1000, friction: 200 };
  const trail = useTrail(welcomeMessage.length, {
    config,
    opacity:  1 ,
    x:  0 ,
    height: 80 ,
    from: { opacity: 0, x: 20, height: 0 },
  })

  let style = {};
  style.button = {
    backgroundColor: '#32CD32',
    border: 'none',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius:'15%'
  };

  return(
    <animated.div className="home" style={props}>
      <Head>
        <title>Alexander Benko</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/home.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet"/>
      </Head>

      <div className="welcome-content" style={{textAlign:'center'}}>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={welcomeMessage[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.h2 style={{ height }}>{welcomeMessage[index]}</animated.h2>
          </animated.div>
        ))}
      </div>

      <div className="misc-holder">
        <button style={style.button}><a href="/benko-resume.pdf" download style={{textDecoration:'none',color:'white'}}>Download My Resume</a></button>
      </div>
    </animated.div>
  )
}

Index.Layout = MyLayout;

export default Index;
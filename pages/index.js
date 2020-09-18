import React from 'react'
import MyLayout from "../layouts/Layout";
import Head from 'next/head';
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import {useSpring,animated,useTrail} from 'react-spring'

const Index = ()=>{
  const props = useSpring({opacity: 1, from: {opacity: 0}});
  const welcomeMessage = ['Hello !','My Name is Alexander Benko','I learned how to code in a National Park','And Welcome to my Website'];
  const config = { mass: 5, tension: 2000, friction: 200 };
  const trail = useTrail(welcomeMessage.length, {
    config,
    opacity:  1 ,
    x:  0 ,
    height: 80 ,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return(
    <animated.div className="home" style={props}>
      <Head>
        <title>Alexander Benko</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/home.ico" />
      </Head>

      <div className="home-content" style={{textAlign:'center'}}>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={welcomeMessage[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.h2 style={{ height }}>{welcomeMessage[index]}</animated.h2>
          </animated.div>
        ))}
      </div>
    </animated.div>
  )
}

Index.Layout = MyLayout;

export default Index;
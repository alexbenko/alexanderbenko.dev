import React, { useState } from "react";
//my components
import MyLayout from "../layouts/Layout";
import AllSkills from '../components/AllSkills.jsx';
import Skill from "../components/Skill.jsx";
import Image from '../components/Image.jsx'
//nextjs components
import Head from "next/head";

import { useSpring,animated,useTrail } from "react-spring";
//icons
import { IconContext } from "react-icons";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDocker, FaGitAlt, FaGithub, FaNpm } from "react-icons/fa";
import { SiFlask, SiPostgresql, SiMysql, SiMongodb, SiJavascript, SiPython, SiNextDotJs, SiNginx, SiGraphql, SiGo } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg"


const Index = ()=>{
  const [isLoaded,setLoaded] = useState(false);
  const [show,setShow] = useState(false)
  const welcomeMessage = ['Hello ! My Name is Alexander Benko','I learned how to code in a National Park','And Welcome to my Website'];

  //arrays to store the name of and the icon for every software skill I am proficient in
  const top = [{title:'React',Comp: <FaReact />}, {title:'Nodejs',Comp:<FaNodeJs />},{title:'Go',Comp:<SiGo />}];
  const languages = [
    {title:'Javscript',Comp: <SiJavascript />}, {title:'Go',Comp:<SiGo />},
    {title:'Python',Comp: <SiPython />}, {title:'C++', Comp: <CgCPlusPlus />}
  ];

  const frontEnd = [{title:'React',Comp:<FaReact />},{title:'Html5',Comp: <FaHtml5 />}, {title:'Css3',Comp:<FaCss3Alt />}];
  const backEnd = [{title:'Nodejs',Comp:<FaNodeJs />}, {title:'Flask',Comp:<SiFlask />}];
  const databases = [{title:'PostgreSQL', Comp: <SiPostgresql />}, {title:'MySQL', Comp: <SiMysql />}, {title:'MongoDB', Comp: <SiMongodb />}];

  const misc = [
    {title:'Docker', Comp: <FaDocker />}, {title:'Nextjs',Comp: <SiNextDotJs />}, {title:'Git', Comp:<FaGitAlt/>}, {title:'Nginx', Comp: <SiNginx />}, {title:'GraphQl', Comp:<SiGraphql />}
  ];

  //turn the recently declared arrays into an array of arrays. Yo Dawg I heard you like arrays...
  const allSkills = [top,languages,frontEnd,backEnd,databases,misc]

  //react spring style objects
  const config = { mass: 15, tension: 1000, friction: 200 };
  const trail = useTrail(welcomeMessage.length, {
    config,
    opacity:  1 ,
    x:  0 ,
    height: 80 ,
    from: { opacity: 0, x: 20, height: 0 },
  });

  //css style objects
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
    <div className="home" style={{zIndex:'1',overflow:'scroll'}}>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="shortcut icon" href="/home.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet"/>
        </Head>


        <div className="welcome-content" style={{textAlign:'center',width:'50%',margin:'0 auto'}}>
          {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
              key={welcomeMessage[index]}
              className="trails-text"
              style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
              <animated.div style={{ height }}>{welcomeMessage[index]}</animated.div>
            </animated.div>
          ))}
        </div>

        <Image file={'me.jpg'}/>

        <div style={{textAlign:'center'}}>
          <button onClick={()=>setShow(!show)} style={style.button}>Full List</button>
          {show ? <AllSkills allSkills={allSkills}/> : ''}
        </div>
    </div>
  )
}

Index.Layout = MyLayout;

export default Index;
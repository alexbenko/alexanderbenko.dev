import React, { useState } from "react";
import Link from "next/link";
import NavItem from './NavItem';
import Contact from '../components/Contact.jsx';
import { useRouter } from "next/router";
import { FaHome, FaGrav, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons"
import {useSpring, animated, config, useTransition} from 'react-spring'

export default function MyLayout({ children }) {
  const [showPopup,setShowPopup] = useState(false);
  const links = [{endpoint:'/adventures',icon:<FaGrav/>}];
  const router = useRouter();

  const contacts = [
    {icon:<FaGithub/>,title:'Github',url:'https://github.com/alexbenko'},
    {icon:<FaLinkedin/>,title:'Linkedin',url:'https://www.linkedin.com/in/alexander-benko/'}
  ];

  const popupAnimation = useSpring({
    config: { ...config.default },
    from: { opacity: 0},
    to: {
      opacity: showPopup ? 1 : 0
    }
  });

  let style= {}
  style.button = {
    backgroundColor: router.pathname == '/' ? '#32CD32' :'#808080',
    border: 'none',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius:'15%',
    margin: '10px 0'
  };

  style.contactButton = {
    backgroundColor:'#808080',
    border: 'none',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius:'15%',
    margin: '10px 0',
  }

  style.contactButton2 = {
    backgroundColor:'#808080',
    border: 'none',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius:'15%',
    margin: '10px 0',
    top:'0',
    left:'0',
    position:'fixed',
    zIndex:'9999'
  }

  style.navbarHolder = {
    clear:'both',
    backgroundColor:'#333',
    overflow: 'hidden',
    position: 'fixed',
    bottom: '0',
    left:'0',
    width: '100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    zIndex:'9'
  };

  const contactPopup = ()=>{
    return(
      <div style={{position: 'fixed',zIndex:'9999',backgroundColor:'black',bottom:'0',left:'0'}} className="nav-contact-info-buttons" >
        <animated.div style={popupAnimation}>
          <div className="navbar-holder" style={{margin:'0 auto'}}>
            <div className="navigation-bar" style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
              <div className={router.pathname == "/" ? "active-link" : "not-link"}>
                <Link href={'/'}>
                  <a style={{textDecoration:'none',color:'white'}}>
                    <button style={style.button}>
                      <IconContext.Provider value={{size:'2.5em'}}>
                        <FaHome />
                      </IconContext.Provider>
                    </button>
                  </a>
                </Link>
              </div>
              {links.map((link,i) => <NavItem router={router} endpoint={link.endpoint} icon={link.icon} key={i} />)}
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
              <div className="resume-container" style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                <a href="/benko-resume.pdf" download style={{textDecoration:'none',color:'white'}}>
                  <IconContext.Provider value={{size:'1.5em'}}>
                    <FaDownload />
                  </IconContext.Provider>
                  <p>Resume</p>
                </a>
              </div>
              {contacts.map((item,i)=> <Contact icon={item.icon} title={item.title} key={i} url={item.url}/>)}
            </div>
          </div>
        </animated.div>
      </div>
    )
  };

  return (
    <>
      <div className="contact-info-popup" >
        <button style={style.contactButton2} onClick={()=>setShowPopup(!showPopup)}>
          {showPopup ?
            <IconContext.Provider value={{color:'white'}}><AiOutlineClose/></IconContext.Provider>:
            <GiHamburgerMenu/>
          }
        </button>
          {showPopup ? contactPopup() : ''}
        </div>
      <div className="layout" style={style.navbarHolder}>

{/*        <div className={router.pathname == "/" ? "active-link" : "not-link"}>
          <Link href={'/'}>
            <button style={style.button}>
              <IconContext.Provider value={{size:'2.5em'}}>
                <FaHome />
              </IconContext.Provider>
            </button>
          </Link>
        </div>
  {links.map((link,i) => <NavItem router={router} endpoint={link.endpoint} icon={link.icon} key={i} />)}*/}
      </div>
    {children}
    </>
  )
}













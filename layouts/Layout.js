import React, { useState } from "react";
import Link from "next/link";
import NavItem from './NavItem';
import Contact from '../components/Contact.jsx';
import { useRouter } from "next/router";
import { FaHome, FaGrav, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons"
import {useSpring, animated, config, useTransition} from 'react-spring'

export default function MyLayout({ children }) {
  const [showPopup,setShowPopup] = useState(false);

  const contacts = [
    {icon:<FaGithub/>,title:'Github',url:'https://github.com/alexbenko'},
    {icon:<FaLinkedin/>,title:'Linkedin',url:'https://www.linkedin.com/in/alexander-benko/'},
    {icon:<MdEmail/>,title:'Email',url:'mailto: benkoAlex521@gmail.com'}
  ];

  const popupAnimation = useSpring({
    config: { ...config.default },
    from: { opacity: 0},
    to: {
      opacity: showPopup ? 1 : 0
    }
  });


  //For some reason when I mapped over the endpoints, they were not visible so I had to hand code them
  return (
    <>
        <div className="overlay" style={{width: showPopup ? '100%' : '0%'}}>
          <a className="closebtn" onClick={()=>setShowPopup(!showPopup)}>&times;</a>
          <div className="overlay-content">
            <Link href={'/'} >
              <a style={{cursor:'pointer'}} onClick={()=>setShowPopup(false)}>{'Home'}</a>
            </Link>

            <Link href={'/adventures'} >
              <a style={{cursor:'pointer'}} onClick={()=>setShowPopup(false)}>{'Adventures'}</a>
            </Link>
          </div>

          <div className="contact-info" style={{display:'flex',flexDirection:'row',position:'absolute',bottom:'0',textAlign:'center'}}>
              <div className="resume-container" style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                  <a href="/benko-resume.pdf" download style={{textDecoration:'none',color:'white',fontSize:'22px'}}>
                    <FaDownload />
                    <span style={{paddingLeft:'1%'}}>Resume</span>
                  </a>
              </div>
              {contacts.map((item,i)=> <Contact icon={item.icon} title={item.title} key={i} url={item.url}/>)}
            </div>
        </div>
        <span style={{fontSize:'30px',cursor:'pointer'}} onClick={()=>setShowPopup(!showPopup)}>&#9776;</span>
      {children}
    </>
  )
}
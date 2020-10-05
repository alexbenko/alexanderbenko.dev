import React from "react";
import Link from "next/link";
import NavItem from './NavItem';
import Contact from '../components/Contact.jsx';
import { useRouter } from "next/router";
import { FaHome, FaGrav, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";


export default function MyLayout({ children }) {
  const links = [{endpoint:'/adventures',icon:<FaGrav/>}];
  const router = useRouter();

  const contacts = [
    {icon:<FaGithub/>,title:'Github',url:'https://github.com/alexbenko'},
    {icon:<FaLinkedin/>,title:'Linkedin',url:'https://www.linkedin.com/in/alexander-benko/'}
  ]

  let style= {}
  style.button = {
    width:'100%',
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
    width:'100%',
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

  style.navbarHolder = {
    backgroundColor:'#333',
    overflow: 'hidden',
    position: 'fixed',
    bottom: '0',
    left:'0',
    width: '100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    margin:' 0 auto',
    maxWidth:'100%',
    zIndex:'9'
  }

  return (
    <>
      <div className="nav-bar" style={style.navbarHolder}>
        <div className={router.pathname == "/" ? "active-link" : "not-link"}>
          <Link href={'/'}>
            <button style={style.button}>
              <IconContext.Provider value={{size:'2.5em'}}>
                <FaHome />
              </IconContext.Provider>
            </button>
          </Link>
        </div>

        {links.map((link,i) => <NavItem router={router} endpoint={link.endpoint} icon={link.icon} key={i} />)}

        <div className="contact-info-buttons" style={{display:'flex',flexDirection:'row',marginLeft:'auto',order: '2'}}>
          <a href="/benko-resume.pdf" download style={{textDecoration:'none',color:'white'}}>
            <button style={style.contactButton}>
              <IconContext.Provider value={{size:'2.5em'}}>
                <FaDownload />
              </IconContext.Provider>
           </button>
          </a>
          {contacts.map((item,i)=> <Contact icon={item.icon} title={item.title} url={item.url}/>)}
        </div>
      </div>

      {children}
    </>
  )
}
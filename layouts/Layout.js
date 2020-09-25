import React from "react";
import Link from "next/link";
import NavItem from './NavItem';
import { useRouter } from "next/router";
import { FaRegLifeRing, FaHome, FaGrav } from "react-icons/fa";
import { IconContext } from "react-icons";


export default function MyLayout({ children }) {

  const links = ['/skills','/adventures'];
  const router = useRouter();
  let button = {
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

  let navbarHolder = {
    backgroundColor:'#333',
    overflow: 'hidden',
    position: 'fixed',
    bottom: '0',
    left:'0',
    width: '100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    margin:' 0 auto',
    maxWidth:'100%',
    zIndex:'9'
  }

  return (
    <>
      <div className="nav-bar" style={navbarHolder}>
        <div className={router.pathname == "/" ? "active-link" : "not-link"}>
          <Link href={'/'}>
            <button style={button}>
              <IconContext.Provider value={{size:'2.5em'}}>
                <FaHome />
              </IconContext.Provider>
            </button>
          </Link>
        </div>
        {links.map((link,i) =>{
          return(
            <NavItem router={router} endpoint={link} key={i} />
          )
        })}
      </div>

      {children}
    </>
  )
}
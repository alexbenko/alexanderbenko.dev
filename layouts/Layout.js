import React from "react";
import Link from "next/link";
import NavItem from './NavItem';
import { useRouter } from "next/router";
import { FaRegLifeRing, FaHome } from "react-icons/fa";
import { IconContext } from "react-icons";


export default function MyLayout({ children }) {
  //make links array an array of objects with the endpoint and the icon
  const links = ['/skills','/adventures'];
  const router = useRouter();
  let style = {};
  style.nonActiveButton = {
    width:'100%',
    backgroundColor: '#808080',
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
  style.activeButton = {
    width:'100%',
    backgroundColor: 'green',
    border: 'none',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius:'15%'
  };

  style.navbarHolder = {
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
      <div className="nav-bar" style={style.navbarHolder}>
        <div className={router.pathname == "/" ? "active-link" : "not-link"}>
          <Link href={'/'}>
            <button style={router.pathname == '/' ? style.activeButton : style.nonActiveButton}>
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
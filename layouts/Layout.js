import React from "react";
import Link from "next/link";
import NavItem from './NavItem';

export default function MyLayout({ children }) {
  const links = ['/skills','/adventures','/contact'];

  return (
    <>
      <div className="nav-bar" style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        {links.map((link,i) =>{
          return(
            <NavItem endpoint={link} key={i} />
          )
        })}
      </div>

      {children}
    </>
  )
}
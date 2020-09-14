import React, { useState } from "react";
import Link from "next/link";
import NavItem from './NavItem';

export default function MyLayout({ children }) {
  const [counter, setCounter] = useState(0);
  const links = ['/skills','/adventures','/contact'];

  return (
    <>
      <div className="nav-bar" style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        {links.map((link,i) =>{
          return(
            <NavItem endpoint={link} key={i} />
          )
        })}

        <button onClick={() => setCounter(counter + 1)}>
          Clicked {counter} Times
        </button>
      </div>

      {children}
    </>
  )
}
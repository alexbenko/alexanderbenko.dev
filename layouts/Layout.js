import React, {useState} from "react";
import Link from "next/link";
import NavItem from './NavItem';
import { useRouter } from "next/router";

export default function MyLayout({ children }) {
  const links = ['/skills','/adventures','/contact'];

  let style = {};

  style.a = {
    textTransform: 'capitalize',
    textDecoration: 'none',
    color: 'black'
  };

  const router = useRouter();

  return (
    <>
      <div className="nav-bar" style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <div className={router.pathname == "/" ? "active-link" : "not-link"}>
          <Link href={'/'}><a>{'Home'}</a></Link>
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
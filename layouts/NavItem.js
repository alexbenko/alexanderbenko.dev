import React from "react";
import Link from "next/link";
import { IconContext } from "react-icons";
import { FaRegLifeRing } from "react-icons/fa";

const NavItem = ({endpoint,router})=>{
  let button = {
    width:'100%',
    backgroundColor: router.pathname == endpoint ? '#32CD32' :'#808080',
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

  return(
    <div className={router.pathname == endpoint ? "active-link" : "not-active-link"}>
      <Link href={endpoint}>
        <button style={button}>
          <IconContext.Provider value={{size:'2.5em'}}>
            <FaRegLifeRing />
          </IconContext.Provider>
        </button>
      </Link>
    </div>
  )

}


export default NavItem;
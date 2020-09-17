import React from "react";
import Link from "next/link";

const NavItem = ({endpoint,router})=>{
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
  return(
    <div className={router.pathname == endpoint ? "active-link" : "not-link"}>
      <Link href={endpoint}><button style={router.pathname == endpoint ? style.activeButton : style.nonActiveButton}><p style={{textTransform: 'capitalize'}}>{endpoint.substring(1)}</p></button></Link>
    </div>
  )

}


export default NavItem;
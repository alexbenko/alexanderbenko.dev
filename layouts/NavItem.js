import React from "react";
import Link from "next/link";

const NavItem = ({endpoint,router})=>{
  return(
    <div className={router.pathname == endpoint ? "active-link" : "not-link"}>
      <Link href={endpoint}><a>{endpoint.substring(1)}</a></Link>
    </div>
  )

}


export default NavItem;
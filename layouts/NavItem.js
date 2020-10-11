import React from "react";
import Link from "next/link";

const NavItem = ({endpoint,router,title})=>{
  return(
    <div className={router.pathname == endpoint ? "active-link" : "not-active-link"}>
      <Link href={endpoint}>
        <a style={{cursor:'pointer'}}>{title}</a>
      </Link>
    </div>
  )

}


export default NavItem;
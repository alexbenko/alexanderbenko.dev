import React, { useState } from "react";
import Link from "next/link";

const NavItem = ({endpoint}) =>{
  const [isSticky, setSticky] = useState(false);

  let style = {};

  style.a = {
    textTransform: 'capitalize',
    textDecoration: 'none',
    color: 'black'
  };

  style.holder = {
    backgroundColor: isToggled ? 'purple' : 'green'
  }

  return(
    <div className="navitem-holder" style={style.holder} onClick={toggle}>
      <Link href={endpoint}><a style={style.a}>{endpoint.substring(1)}</a></Link>
    </div>
  )
};

export default NavItem;
import React, { useSate } from "react";
import Link from "next/link";

const NavItem = ()=>{
  const [active,setActive] = useSate(false);
  let style = {};

  style.a = {
    textTransform: 'capitalize',
    textDecoration: 'none',
    color: 'black'
  };

  style.holder = {
    backgroundColor: this.state.active ? 'purple' : 'green'
  }

  return(
    <div className="navitem-holder" style={style.holder} onClick={()=>setActive(!active))}>
      <Link href={this.props.endpoint}><a style={style.a}>{this.props.endpoint.substring(1)}</a></Link>
    </div>
  )

}


export default NavItem;
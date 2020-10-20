import React,{ useState } from 'react';
import { IconContext } from "react-icons";

const Contact = ({icon,title,url}) =>{
  return(
    <div className={`${title}`}>
      <a target="_blank" rel="noopener noreferrer" href={url} style={{textDecoration:'none',color:'rgb(0, 255, 51)',fontSize:'22px'}}>
        {icon}
        <span style={{paddingLeft:'1%'}}>{title}</span>
      </a>
    </div>
  )
};

export default Contact;
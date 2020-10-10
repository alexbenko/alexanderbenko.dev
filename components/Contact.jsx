import React,{ useState } from 'react';
import { IconContext } from "react-icons";

const Contact = ({icon,title,url}) =>{

  const getTitle = ()=>{
    return(
      <h3>{title}</h3>
    )
  }

  const style = {}

  style.contactButton = {
    backgroundColor:'#808080',
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
    margin: '10px 0',
  }


  return(
    <div className={`${title}`}>
      <a target="_blank" rel="noopener noreferrer" href={url} style={{textDecoration:'none',color:'white'}}>
        <IconContext.Provider value={{size:'1.5em'}}>
          {icon}
        </IconContext.Provider>
        <p>{title}</p>
      </a>
    </div>
  )
};

export default Contact;
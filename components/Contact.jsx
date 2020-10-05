import React,{ useState } from 'react';
import { IconContext } from "react-icons";

const Contact = ({icon,title,url}) =>{
  const [show,setShow] = useState(false);

  const getIcon = ()=>{
    return(
      <IconContext.Provider value={{size:'2.5em'}}>
        {icon}
      </IconContext.Provider>
    )
  }

  const getTitle = ()=>{
    return(
      <h3>{title}</h3>
    )
  }

  const style = {}

  style.contactButton = {
    width:'100%',
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
    <div className={`${title}`} onMouseEnter={()=>setShow(!show)} onMouseLeave={()=>setShow(!show)}>
      <a target="_blank" rel="noopener noreferrer" href={url} style={{textDecoration:'none',color:'white'}}>
        <button style={style.contactButton}>
          {show ? getTitle() : getIcon()}
        </button>
      </a>
    </div>
  )
};

export default Contact;
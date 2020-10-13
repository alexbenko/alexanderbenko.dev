import React,{ useState } from 'react';
import { IconContext } from "react-icons";

const Skill = ({ title, Comp }) =>{
  const [clicked,setClicked] = useState(false);
  return(
    <div className={`${title}-holder`} style = {{cursor:'pointer'}} onClick={()=>setClicked(!clicked)}>
      <IconContext.Provider value={{size:'3.5em',color:'#32CD32'}}>
        {Comp}
      </IconContext.Provider>
      {clicked ? <h2 style={{color:'#32CD32',padding:'5px'}}>{title}</h2> : ''}
    </div>
  )
};

export default Skill;
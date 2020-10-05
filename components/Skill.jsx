import React,{ useState } from 'react';
import { IconContext } from "react-icons";

const Skill = ({ title, Comp }) =>{
  const [clicked,setClicked] = useState(false);
  return(
    <div className={`${title}-holder`} onClick={()=>setClicked(!clicked)} style={{cursor:'pointer',textAlign:'center'}}>
      <IconContext.Provider value={{size:'3em'}}>
        {Comp}
      </IconContext.Provider>
      {clicked ? <h1>{title}</h1> : ''}
    </div>
  )
};

export default Skill;
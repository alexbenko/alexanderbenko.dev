import React, { useState } from "react";
import Skill from './Skill.jsx';
import { useSpring,animated,config } from "react-spring"

//expects an array of arrays,each element of the child array is an object
const AllSKills = ({ allSkills }) =>{
  const p = useSpring({opacity: 1, from: {opacity: 0}})
  return(
    <div className="all-skills-container" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <animated.p style={p}>Click On a icon If you don't recognize it</animated.p>
      {allSkills.map((skillData,i) =>{
        return(
          <div className="skills-holder" key={i}>
            {skillData[0].category !== undefined ? <h3>{skillData[0].category}</h3> : ''}
            <animated.div
              key={i}
              style={useSpring({
                config:{ ...config.default },
                opacity: 1,
                delay: 200 + (i * 100),
                reset: true,
                transform: 'translateX(0px)',
                from: {
                  display:'flex',
                  flexDirection:'row',
                  flexWrap:'wrap',
                  opacity: 0,
                  transform: 'translateX(-250px)'
                }
              })}>

              {skillData.map((skill,i)=> <Skill title={skill.title} Comp={skill.Comp} key={i}/>)}

            </animated.div>
          </div>
        )
      })}
    </div>
  )
}

export default AllSKills
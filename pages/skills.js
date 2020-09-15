import React from "react";
import MyLayout from "../layouts/Layout";
import Image from '../components/Image.jsx';
import axios from 'axios';

const Skills = ({images}) =>{
  const imgStyle = {
    verticalAlign: 'middle',
    width: '50%',
    height: 'auto',

  }

  return(
    <div className="skills" style={{backgroundImage: "url(" + `${require(`../images/adventures/agate.jpg?trace`).trace}`+ ")"}}>
      <div className="skill-imgages"  style={{paddingLeft:"10%",display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10%', gridAutoRows: 'minMax(10%, auto)'}}>
        {images.map((image,i)=>{
          return(
            <Image file={'skills/' + image} styling={imgStyle} key={i}/>
          )})}
      </div>
    </div>
  )
}


export async function getStaticProps(){
  const res = await axios.get('http://localhost:4200/api/skills')
  const images = res.data
  return { props: {images} }
}

Skills.Layout = MyLayout;

export default Skills;
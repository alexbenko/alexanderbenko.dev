import React, { Component } from "react";
import MyLayout from "../layouts/Layout";
import Image from '../components/Image.jsx';
import axios from 'axios';

class Skills extends Component{
  constructor(props){
    super(props)
    this.state = {
      images: []
    }

  }

  componentDidMount(){
    axios.get('/api/skills')
    .then((res)=>{
      this.setState({images:res.data})
    })
    .catch(err => console.error(err))
  }

  render(){
    const imgStyle = {
      verticalAlign: 'middle',
      width: '50%',
      height: 'auto',

    }

    return(
      <div className="skills" >
        <div className="skill-imgages"  style={{paddingLeft:"10%",display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10%', gridAutoRows: 'minMax(10%, auto)'}}>
          {this.state.images.map((image,i)=>{
            return(
              <Image file={'skills/' + image} styling={imgStyle} key={i}/>
            )})}
        </div>
      </div>
    )


  }

}

Skills.Layout = MyLayout;

export default Skills;
import React, { useState, useEffect } from "react";

import Image from '../components/Image.jsx';
import MyLayout from "../layouts/Layout";

import axios from 'axios';
import Head from 'next/head';
import { useSpring, animated, config } from 'react-spring';

import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";

const Adventures = ({noTest = true}) =>{
  //state tracking
  const [gallery, setGallery] = useState([]);
  const [current,setCurrent]  = useState('agate.jpg');
  const [search,setSearch]    = useState('');
  const [listHovered,setListHovered] = useState(false);
  const [showPopup,setShowPopup] = useState(false);

  //ComponentDidMount?
  useEffect(() => {
    axios.get('/api/adventures')
    .then((res)=>{
     setGallery(res.data)
    })
    .catch(err => console.error(err))
  },[]);

  //Helper Functions
  const capitalize = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const previousImg = ()=>{
    let currentIdx = gallery.indexOf(current);
    //if current image is first in the gallery
    if(current === gallery[0]){
      //set current image to last image
      setCurrent(gallery[gallery.length - 1])
    } else {
      setCurrent(gallery[currentIdx - 1])
    }
  };

  const nextImg = ()=>{
    let currentIdx = gallery.indexOf(current);
    //if current equals last image of gallery
    if(current === gallery[gallery.length - 1]){
      // set current to first image
      setCurrent(gallery[0])
    } else{
      setCurrent(gallery[currentIdx + 1])
    }
  };

  const distance = (s1,s2)=>{
    //https://en.wikipedia.org/wiki/Levenshtein_distance
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    let costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      let lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0)
          costs[j] = j;
        else {
          if (j > 0) {
            let newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue),
                costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0)
        costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }

  const similarity = (s1,s2) =>{
    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    let longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return (longerLength - distance(longer, shorter)) / parseFloat(longerLength);
  };

  const getSearchResult = async ()=>{
    if(search.length < 3){
      throw('Please Type at least 3 letters')
    }
    let mostSimilar = gallery[0]

    gallery.map((file)=>{
      //longer word needs to be passed in first for the algo works properly
      if(mostSimilar.length > search.length && file.length > search.length){
        if(similarity(file,search) > similarity(mostSimilar,search)){
          mostSimilar = file
        }
      } else {
        if(similarity(search,file) > similarity(search,mostSimilar)){
          mostSimilar = file
        }
      }
    })

    if(similarity(mostSimilar,search) > .3){
      return mostSimilar
    } else {
      throw('Invalid Search, Please Try Again')
    }
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      let searchResult = await getSearchResult()
      setCurrent(searchResult)
    } catch(err){
      //I want to alert the user of any errors
      alert(err)
    } finally{
      //reset search bar after submit
      setSearch('')
    }
  };

  //React spring style objects
  const props = useSpring({opacity: 1, from: {opacity: 0}});
  const popupAnimation = useSpring({
    reset: showPopup,
    config: { ...config.stiff },
    from: { opacity: 0 },
    to: {
      opacity: showPopup ? 1 : 0
    }
  });

  //sub component functions
  const popup = ()=>{
    return(
      <animated.div style={popupAnimation}>
        <div className="file-list-popup" style={style.popup}>
          {gallery.map((file,i)=><p className="popup-item" key={i} onClick={()=>setCurrent(file)}>{capitalize(file.split('.')[0])}</p>)}
        </div>
      </animated.div>
    )
  }

  let style = {};

  style.listButton = {
    backgroundColor: listHovered ? 'grey' :'rgb(0, 255, 51)',
    border: 'none',
    color: 'white',
    padding: listHovered ? '12px' : '10px',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '16px',
    margin: '0 5px',
    cursor: 'pointer',
    borderRadius:'15%'
  };

  style.button = {
    backgroundColor:'rgb(0, 255, 51)',
    border: 'none',
    color: 'black',
    padding: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '16px',
    margin: '0 5px',
    cursor: 'pointer',
    borderRadius:'15%'
  };

  style.popup = {
    zIndex:'7',
    position:'absolute',
    backgroundColor:'black',
    maxWidth:'100%',
    margin: '0 auto',
    display:'block',
    boxShadow:'0px 8px 16px 0px rgba(0,0,0,0.2)',

  }

  return(
    <div className="adventures" style={{paddingBottom:'25%'}} >
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/adventures.ico" />
      </Head>

      <div className="current-image-holder" style={{textAlign:'center',paddingBottom:'20px'}}>
        <h3>My Adventures</h3>
        <h3>Click one of the buttons or type in a name of a file to cycle through images!</h3>
        <div className="interaction-holder" style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <div className="image-file-list" >
              <button
                className="file-list-button"
                style={style.listButton}
                onMouseEnter={()=>setListHovered(!listHovered)}
                onMouseLeave={()=>setListHovered(!listHovered)}
                onClick={()=>setShowPopup(!showPopup)}
              >
                <span style={{color:'black'}}>List Images {listHovered ? '?' : ''}</span>
              </button>

              {showPopup && popup()}

            </div>

            <div
              className="search_bar_container"
              style={{display:'flex',flexDirection:'row',justifyContent:'center',paddingLeft:'19px'}}
            >
                  <form onSubmit={(e)=>handleSubmit(e)} className="search-bar">
                    <input type="submit" style={{display: "none"}} />
                    <input type="text" placeholder = "Search A Photo Here..."onChange={(e) => setSearch(e.target.value)} value={search} style={{  padding: '10px'}}></input>
                  </form>

                  <div style={{padding:'8px',cursor:'pointer',backgroundColor: 'rgb(0, 255, 51)',display:'flex',justifyContent:'center'}}
                    onClick={(e)=>handleSubmit(e)}
                  >
                    <IconContext.Provider value={{color:"black",display:'block',margin:'auto'}}>
                      <FaSearch />
                    </IconContext.Provider>
                  </div>
              </div>
            </div>
          <animated.div style={props} >
            <div className="current-image">

              {noTest ?
                <Image file={`adventures/${current}`} name={"current"}/> :
                <img className="current" src={`../images/adventures/${current}`}></img>
              }

              <p>{`${gallery.indexOf(current) + 1} out of ${gallery.length}`}</p>
            </div>


            <div className="gallery-buttons" style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
              <button style={style.button} onClick={()=>previousImg()}>Previous</button>
              <button style={style.button} onClick={()=>nextImg()}>Next</button>
            </div>

          </animated.div>
      </div>

      <div className="text-card" >
        <h3>Info about my images:</h3>
        <ul>
          <li>The purpose of this page is to demonstrate my ability to make an interactive website.</li>
          <li>My goal was to allow the user to interact with all the images, without rendering all of them to the page at once.</li>
          <li>All of these images are self hosted. Which forced me to come up with creative ways to speed up their load times.</li>
          <li>Using the lqip image format, I first load a low pixel version of the image and apply a blur filter.</li>
          <li>Once the image loads, I display the full pixel version and remove the blur.</li>
        </ul>
      </div>

      <br/>

      <div className="text-card">
        <h3>Info about the code that powers this page:</h3>
        <ul>
            <li>To display the image file names, the server reads the directory that holds all of the images and sends it to my front end.</li>
            <li>The front end uses some Javascript to make the file names more user friendly and displays it when you click `List Images`.</li>
            <li>To power the search bar I implemented the
              <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Levenshtein_distance"> Levenshtein Distance Algorithm.</a>
            </li>
            <li>The algorithm measures the difference between two words (strings). When you type in name, the code compares what you typed to all of the file names. If there is a close similarity, it changes the current image to the one that closest matches the search.</li>
        </ul>
      </div>

    </div>
  )
}

Adventures.Layout = MyLayout;
export default Adventures;
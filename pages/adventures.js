import React, { useState, useEffect } from "react";
import axios from 'axios';
import MyLayout from "../layouts/Layout";
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

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0)
          costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
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
      return Promise.reject('Please Type at least 3 letters')
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
      return Promise.resolve(mostSimilar)
    } else {
      return Promise.reject('Invalid Search, Please Try Again')
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
    backgroundColor: listHovered ? 'green' :'#32CD32',
    border: 'none',
    color: 'white',
    padding: listHovered ? '14px' : '10px',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '16px',
    margin: '0 5px',
    cursor: 'pointer',
    borderRadius:'15%',
    marginRight:'20em'
  };

  style.button = {
    backgroundColor:'#32CD32',
    border: 'none',
    color: 'white',
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
    opacity:'77%'
  }

  style.popopHolder = {
    position: 'relative',
    display: 'inline-block'
  }

  return(
    <div className="adventures" style={{paddingBottom:'25%'}} >
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/adventures.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet"/>
      </Head>

      <div className="current-image-holder" style={{textAlign:'center'}}>
        <h3>My Adventures</h3>
        <h3>Click one of the buttons or type in a name of a file to cycle through images!</h3>

        <div className="image-file-list" style={style.popopHolder}>
            <button style={style.listButton}
            onMouseEnter={()=>setListHovered(!listHovered)}
            onMouseLeave={()=>setListHovered(!listHovered)}
            onClick={()=>setShowPopup(!showPopup)}
            >
              List Image Files {listHovered ? '?' : ''}
            </button>

            {showPopup ? popup() : ''}

          </div>

          <animated.div style={props} >
            <div className="current-image">

              {noTest ?
                <picture className='current'>
                  <source className='current' srcSet={require(`../images/adventures/${current}?webp?resize&size=1000`)}  type="image/webp" />
                  <source className='current' srcSet={require(`../images/adventures/${current}`)}  type="image/jpeg" />
                  <img className='current' src={require(`../images/adventures/${current}?webp?resize&size=1000`)} alt={`${current.split('.')[0]}`}/>
                </picture> :
                <img className="current" src={`../images/adventures/${current}`}></img>
              }

              <p>{`${gallery.indexOf(current) + 1} out of ${gallery.length}`}</p>
            </div>

            <div className="gallery-buttons" style={{display:'flex',flexDirection:'row',justifyContent:'center',margin:'10 auto',alignItems:'center'}}>
              <button style={style.button} onClick={()=>previousImg()}>Previous</button>
              <button style={style.button} onClick={()=>nextImg()}>Next</button>

              <form onSubmit={(e)=>handleSubmit(e)} className="search-bar">
                <input type="submit" style={{display: "none"}} />
                <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} style={{ padding: '10px'}}></input>
              </form>
              <div style={{paddingLeft:'1%',cursor:'pointer'}} onClick={(e)=>handleSubmit(e)}>
                <FaSearch />
              </div>
            </div>
          </animated.div>
      </div>
    </div>
  )
}

Adventures.Layout = MyLayout;
export default Adventures;
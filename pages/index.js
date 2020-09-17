import React from 'react'
import MyLayout from "../layouts/Layout";
import Head from 'next/head';
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
const Index = ()=>{
  return(
    <div className="home">
      <Head>
        <title>Alexander Benko</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/home.ico" />
      </Head>

      <div className="home-content" style={{textAlign:'center'}}>
        <h1 >Welcome To My Site</h1>
        <IconContext.Provider value={{size:'2.5em'}}>
          <FaGithub />
        </IconContext.Provider>


      </div>
    </div>
  )
}

Index.Layout = MyLayout;

export default Index;
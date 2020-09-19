import React from "react";
import MyLayout from "../layouts/Layout";
import Head from 'next/head'

const Adventures = () =>{
  return(
    <div className="adventures">
      <Head>
        <title>Alexander Benko</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/adventures.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet"/>
      </Head>

      Adventures
    </div>
  )

}

Adventures.Layout = MyLayout;
export default Adventures;
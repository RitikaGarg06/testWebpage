import React from 'react'
import Header from './Header';
import Campus from './Campus';
import Course from './Course';
import "../style/header.css";

const home = () => {
   const showMenu = () => {
     const navLinks = document.querySelector("#navLinks");
     navLinks.style.right = "0";
   };

   const hideMenu = () => {
     const navLinks = document.querySelector("#navLinks");
     navLinks.style.right = "-200px";
   };

   return (
     <div>
       <Header showMenu={showMenu} hideMenu={hideMenu} />
       <Course />
       <Campus />
     </div>
   );

}

export default home

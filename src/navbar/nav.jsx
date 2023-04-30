import "./nav.css"
import {TiWorld} from "react-icons/ti"
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"
import { useState } from "react";
const NavBar = () =>{

   const[active ,setActive]=useState('navBar')
   

   const activaation  = () =>{
    setActive('navBar activenavbar')
   
   }
   const remove  = () =>{
    setActive('navBar ')
   
   }
    return(
      <section className="navBarSection">
        <header className="header flex">
            <div className="logDiv">
                <a href="#" className="logo flex">
                    <h1><TiWorld className="icon"/>Travel</h1>
                </a>
            </div>
            <div className={active}>
                <ul className="navlist flex">
                    <li className="navItem">
                        <a href="#" className="navLink">Home</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">Packages</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">Shop</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">About</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">News</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">Pages</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">Contact</a>
                    </li>
                    <button className='btn'><a href="#">Book Now</a> </button>
                </ul>
                <div className="closeNavBar" onClick={remove} ><AiFillCloseCircle className="icon"/></div>
            </div>

            
            <div onClick={activaation} className="GridNavBar"><TbGridDots className="icon"></TbGridDots></div>

        </header>

      </section>
    );
};

export default NavBar
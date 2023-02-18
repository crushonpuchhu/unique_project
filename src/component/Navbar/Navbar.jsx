import React from 'react'
import style from './nav.module.css'
import { DiCodeigniter } from 'react-icons/di';
import { GrFormSearch } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { BiFilter } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

   const nav1=useNavigate();
   const nav2=useNavigate();
   const nav3=useNavigate();
   const nav4=useNavigate();
   


  return (
    <>
    <div className={style.main}>
      {
       
      }
          
        {/* 1 */}
          <div className={style.first}>
           <DiCodeigniter/>
           <p>WASSERSTOFF</p>
          </div>

          {/* 2 */}
          <div className={style.first} >
            
            <div className={style.input}>
                <input type="text"/>
                <div>
                    <GrFormSearch/>
                </div>
            </div>
          </div>

          {/* 3 */}

          <div className={style.first} >
            <nav onClick={()=>{nav1("/Statistics")}}><p>Statistics</p></nav>
            <nav onClick={()=>{nav2("/Overview")}} ><p>Overview</p></nav>
            <nav onClick={()=>{nav3("/Dashboadrd")}} ><p>Dashboadrd</p></nav>
            <nav onClick={()=>{nav4("/Analytics")} }><p>Analytics</p></nav>
          </div>

        {/* 4 */}
          <div className={style.first}>
               <FiUser/>
               <BiFilter/>
          </div>
        
        

        
    </div>


    </>
  )
}

export default Navbar



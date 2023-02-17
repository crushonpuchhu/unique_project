import React from 'react'
import style from './nav.module.css'
import { DiCodeigniter } from 'react-icons/di';
import { GrFormSearch } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { BiFilter } from "react-icons/bi";


const Navbar = () => {


  return (
    <>
    <div className={style.main}>
          
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
            <nav><p>Statistics</p></nav>
            <nav><p>Overview</p></nav>
            <nav><p>Dashboadrd</p></nav>
            <nav><p>Analytics</p></nav>
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



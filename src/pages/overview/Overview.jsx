import React, { useEffect, useRef } from "react";
import style from './overview-style.module.css'
import { FaGreaterThan } from "react-icons/fa";
import anime from 'animejs/lib/anime.es.js';
 import {BsGraphUp} from "react-icons/bs";
import {BiCrown} from "react-icons/bi";
import {GoGraph} from "react-icons/go"


const Overview=()=>{

  
    const data = useRef();
    const data2 = useRef();
    const data3 = useRef();
    const data4 = useRef();

    const proge= useRef();

    useEffect(()=>{

              anime({
            targets: data.current,
            innerHTML: [0, 2431340],
            easing: 'linear',
            round: 10 ,
            duration:1200
          });

          anime({
            targets: data2.current,
            innerHTML: [0, 540549],
            easing: 'linear',
            round: 10 ,
            duration:1550
          });

          anime({
            targets: data3.current,
            innerHTML: [0, 1205677],
            easing: 'linear',
            round: 10 ,
            duration:1600
          });

          anime({
            targets: data4.current,
            innerHTML: [0, 48430039],
            easing: 'linear',
            round: 10 ,
            duration:1700
          });


    },[])

   




    return(
        <>

        <div className={style.main}>

            <div className={style.first}>
           
            </div>

            <div className={style.second}>
             
             <div>
               <p>WSTF FRONT-END-HACKATHON</p>
             </div>

              <div>
                 <p>All users<h6>DETAIL <FaGreaterThan/> </h6> </p>
                 <h1 ref={data}></h1>
              </div>

              <div>
                
                <nav>
                     <div><BsGraphUp/></div>
                     <div className={style.dat1} ><p>Total earning</p> <p ref={data2}>540,549</p></div>
                </nav>

                <nav>
                    <div><BiCrown/></div>
                     <div className={style.dat1} ><p>Sales</p> <p ref={data3}>1,205,677</p></div> 
                </nav>
                <nav>

                    <div><GoGraph/></div>
                     <div className={style.dat1} ><p>Purchase</p> <p ref={data4}>48,430,039</p></div>
                </nav>

              </div>

              <div ref={proge} ></div>

            </div>

            <div className={style.third}>
             thirsd
            </div>


            
        </div>
        </>
    )
}
export default Overview
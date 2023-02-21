import React, { useEffect, useRef, useState } from "react";
import style from './overview-style.module.css'
import { FaGreaterThan } from "react-icons/fa";
import anime from 'animejs/lib/anime.es.js';
import { BsGraphUp } from "react-icons/bs";
import { BiCrown } from "react-icons/bi";
import { GoGraph } from "react-icons/go"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';







const Overview = () => {





  const data = useRef();
  const data2 = useRef();
  const data3 = useRef();
  const data4 = useRef();
  const proge = useRef();

  useEffect(() => {

    anime({
      targets: data.current,
      innerHTML: [0, 2431340],
      easing: 'linear',
      round: 10,
      duration: 1200
    });

    anime({
      targets: data2.current,
      innerHTML: [0, 540549],
      easing: 'linear',
      round: 10,
      duration: 1550
    });

    anime({
      targets: data3.current,
      innerHTML: [0, 1205677],
      easing: 'linear',
      round: 10,
      duration: 1600
    });

    anime({
      targets: data4.current,
      innerHTML: [0, 48430039],
      easing: 'linear',
      round: 10,
      duration: 1700
    });


  }, [])


  const dataer = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9,
      amt: 229,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 20,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9,
      amt: 229,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 20,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9,
      amt: 229,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 20,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    }, {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9,
      amt: 229,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 20,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    }, {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9,
      amt: 229,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 20,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    }, {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9,
      amt: 229,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 20,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9,
      amt: 229,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 20,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9,
      amt: 229,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 20,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9,
      amt: 229,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 20,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    }, {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9,
      amt: 229,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 20,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    }, {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9,
      amt: 229,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 20,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    }, {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    }
  ];






  return (



    <>

      <div className={style.main}>

        <div className={style.first}>

        </div>

        <div className={style.second}>

          <div>
            <p>WSTF FRONT-END-HACKATHON</p>
          </div>

          <div>
            <p>All users<h6>DETAIL <FaGreaterThan /> </h6> </p>
            <h1 ref={data}></h1>
          </div>

          <div>

            <nav>
              <div><BsGraphUp /></div>
              <div className={style.dat1} ><p>Total earning</p> <p ref={data2}>540,549</p></div>
            </nav>

            <nav>
              <div><BiCrown /></div>
              <div className={style.dat1} ><p>Sales</p> <p ref={data3}>1,205,677</p></div>
            </nav>
            <nav>

              <div><GoGraph /></div>
              <div className={style.dat1} ><p>Purchase</p> <p ref={data4}>48,430,039</p></div>
            </nav>

          </div>

          <div ref={proge}>

            <section className={style.pro1}>

              <nav className={style.des}>

                <CircularProgressbar
                  value={27}
                  text={`${27}%`}
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',

                    // Text size
                    textSize: '20px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(65, 105, 225, 1)`,
                    textColor: 'black',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })}
                />;

              </nav>

              <nav className={style.textw}>
                <p>92,980</p>
                <p>Active users</p>
              </nav>

            </section>

            <section className={style.pro2}>


              <nav className={style.des}>

                <CircularProgressbar
                  value={67}
                  text={`${67}%`}
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',

                    // Text size
                    textSize: '20px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(55, 173, 72, 1)`,
                    textColor: 'black',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })}
                />;

              </nav>

              <nav className={style.textw}>
                <p>22,652</p>
                <p>New users</p>
              </nav>

            </section>
          </div>

        </div>

        <div className={style.third}>

          <div className={style.chartdiv}>
            <nav className={style.textn}>
              <p>Sales Figures</p>
              <p>$10,430</p>
            </nav>
            <nav className={style.chart}>
              <BarChart width={1280} height={55} data={dataer}>
                <Bar dataKey="uv" fill="royalblue" />
              </BarChart>
            </nav>

          </div>






        </div>



      </div>

    </>
  )
}
export default Overview






import React from 'react'
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { FaTelegram } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped,Typed } from "react-typed";
import pic from "../../src/assets/profile-banner.jpg"
const Home = () => {
  return (
    <>
    <div name="Home" 
    className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
        <span>Welcome In My Feed</span>
        <div className='flex space-x-1 text-2xl md:text-4xl'>
            <h1 className='font-bold'>Hello, I'm a </h1>
            {/*<span className='text-green-500 font-bold'>Developer</span>*/}
            <ReactTyped className='text-green-600 font-bold'
            strings={["Developer", "Programmer", "Coder"]}
            typeSpeed={40}
            backtype={50}
            loop={true}
            />     
        </div>
        <br/>
        <p className='text-sm md:text-md text-justify'>A motivated final-year MCA student with strong skills in HTML, CSS, JavaScript, React.js and
        Core Java. Currently expanding backend knowledge through the MERN stack, with a focus on
        full-stack development. Experienced in leading teams and managing academic projects. Actively
        seeking internship or full-time opportunities in the tech industry to apply and enhance my skills.
        </p>
        <br/>
        {/*social medial icons */}
        <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
          <div className='space-y-2'>
            <h1 className='font-bold text-center'>Available on</h1>
            <ul className='flex space-x-5 '>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                  <BiLogoFacebookSquare className='text-3xl cursor-pointer'/>
                  </a>
                </li>

                <li>
                  <a href="https://in.linkdin.com" target="_blank">
                  <FaLinkedin className='text-3xl cursor-pointer'/>
                  </a>
                </li>

                <li>
                  <a href="https://www.youtube.com/" target="_blank">
                  <TfiYoutube className='text-3xl cursor-pointer'/>
                  </a>
                </li>

                <li>
                  <a href="https://telegram.org/" target="_blank">
                  <FaTelegram className='text-3xl cursor-pointer'/>
                  </a>
                </li>
            </ul>
          </div>

          
          <div className='space-y-2'>
              <h1 className='font-bold '>Currently working on</h1>
              <ul className='flex space-x-5 '>
                  <li><SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' /></li>
                  <li><SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' /></li>
                  <li><FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' /></li>
                  <li><FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full  cursor-pointer' /></li>
              </ul>
          </div>
          
        </div>
        
      </div>

      <div className='md:w-1/2 md:ml-50 md:mt-12 mt-8 order-1'>
          <img src={pic} className='rounded-full w-[450px] h-[450px]' alt=""/>
      </div>
      </div>
    </div>
    <hr/>
    </>
  )
}

export default Home

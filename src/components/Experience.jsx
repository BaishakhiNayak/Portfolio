import React from 'react'
import js from "../../src/assets/js-img.png"
import java from "../../src/assets/java-img.jpg"
import html from "../../src/assets/html-img.jpg"
import css from "../../src/assets/css-img.svg"
import sql from "../../src/assets/sql-img.png"
import mern from "../../src/assets/mern-img.png"

const Experience = () => {
    const expItem=[
        {
          id:1,
          logo:html,
          name:"HTML",
        },
        {
          id:2,
          logo:css,
          name:"CSS",
        },
        {
          id:3,
          logo:js,
          name:"JavaScript",
        },
        {
          id:4,
          logo:java,
          name:"JAVA",
        },
        {
          id:5,
          logo:sql,
          name:"MySQL",
        },
        {
          id:6,
          logo:mern,
          name:"MERN Stack",
        }
    ]
  return (
    <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Experience</h1>
            <span className='font-semibold'>I've more than 1 years of experiance in below technologies.</span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-9 my-5 '>
            {
                expItem.map(({id,logo,name}) =>(
                    <div >
                        <div className=' m-2 flex justify-center items-center  'key={id}>
                            <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[px] hover:scale-130 duration-300' alt=""/>
                            
                        </div>
                        <div className='font-bold text-xl mb-2 p-2 flex justify-center items-center'>{name}</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Experience

import React from 'react'
import exp from "../../src/assets/express-img.webp"
import mong from "../../src/assets/mongodb-img.png"
import rect from "../../src/assets/react-img.png"
import nod from "../../src/assets/node-img.png"
import js from "../../src/assets/js-img.png"

const PortFolio = () => {
  const cardItem=[
    {
      id:1,
      logo:mong,
      name:"MongoDB",
      desc:"MongoDB is a NoSQL document database known for its scalability, flexibility. It stores data in JSON-like documents, allowing for dynamic schemas. "
    },
    {
      id:2,
      logo:exp,
      name:"Express Js ",
      desc:"Express. js is primarily used as a backend framework for building web applications. It is designed to handle HTTP requests and responses, manage data."
    },
    {
      id:3,
      logo:rect,
      name:"React Js",
      desc:"React is a JavaScript library for building user interfaces,  component-based architecture, where UI elements are encapsulated and reusable. "
    },
    {
      id:4,
      logo:nod,
      name:"Node Js",
      desc:"Node. js (Node) is an Open Source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming"
     },
    {
      id:5,
      logo:js,
      name:"JavaScript",
      desc:"JavaScript is a versatile, cross-platform, object-oriented scripting language primarily used to create interactive effects within web browsers. "
    }
  ]
  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>PortFolio</h1>
        <span className=' underline font-semibold'>Featured projects</span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-9 my-5 '>
        {
          cardItem.map(({id,logo,name,desc}) => (
            <div className='md:w-[300px] md:h-[300px] border-[1px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 ' key={id}>
              <div className=' m-2 flex justify-center items-center '>
                <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[1px] ' alt=""/>
              </div>
                <div>
                  <div className='font-bold text-xl mb-2 p-2'>{name}</div>
                  <p className='px-2 text-sm text-grey-900'>{desc}</p>
                </div>
                <div className=' m-2 flex justify-center items-center '>
                  <button className='bg-green-600  hover:bg-green-900 text-white p-1 rounded-3xl w-15 cursor-pointer'>Click</button>
                </div>
                
            </div>
            
          ))
        }
      </div>
    </div>
  )
}

export default PortFolio

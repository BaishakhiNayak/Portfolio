import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios";


const Contact = () => {
    const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo={
        name:data.name,
        email:data.email,
        msg:data.msg
    }
    try{
        
       await axios.post("https://getform.io/f/bololrwa", userInfo);
       alert("Your message has been sent");

    } catch(error) {
        console.log(error);
    }
  }
  return (
    <>
      <div name="Contacts" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-5'>Contact Me</h1>
        <span className='font-semibold'>Please fill out the form below to contact me</span>
        <div className='flex flex-col items-center justify-center mt-5'>
            <form 
            onSubmit={handleSubmit(onSubmit)}
            /*action="https://getform.io/f/bololrwa" 
            method="POST"*/
            className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                <h1 className='text-xl font-semibold'>Send Your Message</h1>

                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700'>FullName</label>
                    <input 
                    {...register("name", { required: true })}
                    name="name"
                    className='shadow rounded-lg apperance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white'
                    type="text" placeholder='Enter Your Fullname '
                    />
                    {errors.name && <span>This field is required</span>}

                </div>

                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700'>Email Address</label>
                    <input 
                    {...register("email", { required: true })}
                    name="email"
                    className='shadow rounded-lg apperance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white'
                    type="text" placeholder='Enter Your Email address '
                    />
                    {errors.email && <span>This field is required</span>}

                </div>

                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700'>Message</label>
                    <textarea 
                    {...register("msg", { required: true })}
                    name="msg"
                    className='shadow rounded-lg apperance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white'
                    type="text" placeholder='Enter Your Query '
                    />
                    {errors.msg && <span>This field is required</span>}

                </div>

                <button className='bg-green-600 text-white rounded-xl px-3 py-2 hover:bg-green-900'>Send</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Contact

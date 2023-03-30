import React from 'react'
import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonLinesFill } from 'react-icons/bs'

export const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='mx-auto w-full mt-24 py-24 flex justify-center items-center'>
                <div>
                    <p className='uppercase tracking-widest text-gray-700 text-sm'>
                        Lets build something together
                    </p>
                    <h1 className='mt-4 mb-2'>
                        Hi, I am <span className='text-[#a0522d]'>Asad </span><span className='text-[#00A693]'>Mehmood</span>
                    </h1>
                    <h1 className='mb-4'>
                        A Front-End Web Developer
                    </h1>
                    <p className=' max-w-[60%] text-gray-700 mx-auto'>
                        I am a front-end web developer specializing in building (and
                        occasionally designing) exceptional digital experiences. Currently,
                        I am focused on building responsive front-end web applications while
                        learning back-end technologies.
                    </p>
                    <div className='flex items-center justify-between gap-3 flex-wrap mx-auto  w-[330px] px-2 mt-6 '>
                        <div className='rounded-full shadow-xl shadow-gray-400 cursor-pointer p-5 bg-stone-100 hover:scale-110 ease-in duration-100'>
                            <FaLinkedinIn size={20} color="#0072b1" />
                        </div>
                        <div className='rounded-full shadow-xl shadow-gray-400 cursor-pointer p-5 bg-stone-100 hover:scale-110 ease-in duration-100'>
                            <FaGithub size={20} color='#171515' />
                        </div>
                        <div className='rounded-full shadow-xl shadow-gray-400 cursor-pointer p-5 bg-stone-100 hover:scale-110 ease-in duration-100'>
                            <AiOutlineMail size={20} color='#FF2400' />
                        </div>
                        <div className='rounded-full shadow-xl shadow-gray-400 cursor-pointer p-5 bg-stone-100 hover:scale-110 ease-in duration-100'>
                            <BsFillPersonLinesFill size={20} color='#25D366' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

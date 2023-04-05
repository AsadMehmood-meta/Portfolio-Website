import Image from 'next/image'
import React from 'react'
import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'

export const Contact = () => {
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w m-auto px-5 py-16 '>
                <p className='uppercase tracking-widest py-6 text-2xl text-[#a0522d] font-semibold'>
                Get In Touch
                </p>
                {/* <h1 className='pt-4 pb-8 text-[#00A693]'>
                    Get In Touch
                </h1> */}

                <div className='grid  md:grid-cols-3 gap-8 '>

                    {/* Left Side */}
                    <div className='w-full h-auto grid col-span-1 rounded-2xl shadow-xl shadow-gray-400 bg-stone-50'>
                        <div>
                            <div className='w-full mx-auto justify-center items-center p-5'>
                                <Image className='rounded-xl hover:scale-105 ease-in duration-300' src="/assets/contact.jpg" alt="contact" width={800} height={800} />

                                <div className='tracking-widest'>
                                    <h1 className='pt-5 py-2'>
                                        <span className='text-[#a0522d]'>Asad </span><span className='text-[#00A693]'>Mehmood</span>
                                    </h1>
                                    <p className='pb-2 text-lg text-gray-700'>
                                        Front-End developer
                                    </p>
                                    <p className='py-2 text-md text-gray-700'>
                                        I am available for freelance or full-time positions.
                                    </p>
                                    <p className=' text-md text-gray-700'>
                                        Contact me and lets talk.
                                    </p>

                                    <div className='mt-20 mb-8'>
                                        <p className='uppercase text-md text-gray-700 text-center'>
                                            Connect with me
                                        </p>

                                        <div className='flex items-center justify-center gap-8 flex-wrap w-full my-2 '>
                                            <div className='rounded-full shadow-xl shadow-gray-400 cursor-pointer p-2 bg-stone-100 hover:scale-125 ease-in duration-100'>
                                                <FaLinkedinIn color='#0072b1' />
                                            </div>
                                            <div className='rounded-full shadow-xl shadow-gray-400 cursor-pointer p-2 bg-stone-100 hover:scale-125 ease-in duration-100'>
                                                <FaGithub color='#171515' />
                                            </div>
                                            <div className='rounded-full shadow-xl shadow-gray-400 cursor-pointer p-2 bg-stone-100 hover:scale-125 ease-in duration-100'>
                                                <AiOutlineMail color='#FF2400' />
                                            </div>
                                            <div className='rounded-full shadow-xl shadow-gray-400 cursor-pointer p-2 bg-stone-100 hover:scale-125 ease-in duration-100'>
                                                <BsFillPersonLinesFill color="#25D366" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Side */}
                    <div className='w-full h-auto grid col-span-1 md:col-span-2 rounded-2xl shadow-xl shadow-gray-400 bg-stone-50'>
                        <div className='p-14'>
                            <form>
                                <div className='grid lg:grid-cols-2 gap-8 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='p-2 border-2 border-gray-400 rounded-lg'
                                            type='text' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input className='p-2 border-2 border-gray-400 rounded-lg'
                                            type='text' />
                                    </div>
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>E-mail</label>
                                    <input className='p-2 border-2 border-gray-400 rounded-lg'
                                        type='email' />
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='p-2 border-2 border-gray-400 rounded-lg'
                                        type='text' />
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='p-2 border-2 border-gray-400 rounded-lg'
                                        rows={8} />
                                </div>

                                <button className='w-full rounded-lg text-white uppercase tracking-widest font-bold p-2 mt-3 bg-gradient-to-r from-[#a0522d] to-[#00A693]'>
                                    Send message
                                </button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

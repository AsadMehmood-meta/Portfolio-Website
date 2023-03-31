"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonLinesFill } from 'react-icons/bs'
import amlogoImg  from '../../public/assets/amlogo.png'



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      }
      else {
        setShadow(false)
      }
    }

    window.addEventListener("scroll", handleShadow)
  }, [])

  return (
    <div style={{ backgroundColor: `#fafaf9` }}
      className={shadow
        ? 'fixed top-0 w-full h-20 shadow-xl z-[100]'
        : 'fixed top-0 w-full h-20 z-[100]'}>

      <div className='flex justify-between items-center w-full h-full pt-2'>
        <div className='p-10'>
          <Image className='cursor-pointer' src={amlogoImg.src}
          alt="AM"
          width="100"
          height="100"
        />
        </div>

        <div>
          <ul className='hidden md:flex mr-5'>
            <a href="/#">
              <li className='ml-10 uppercase text-md hover:border-b hover:border-gray-300 hover:scale-105 ease-in duration-100'>
                Home</li>
            </a>
            <a href="/#about">
              <li className='ml-10 uppercase text-md hover:border-b hover:border-gray-300 hover:scale-105 ease-in duration-100'>
                About</li>
            </a><a href="/#skills">
              <li className='ml-10 uppercase text-md hover:border-b hover:border-gray-300 hover:scale-105 ease-in duration-100'>
                Skills</li>
            </a><a href="/#projects">
              <li className='ml-10 uppercase text-md hover:border-b hover:border-gray-300 hover:scale-105 ease-in duration-100'>
                Projects</li>
            </a><a href="/#contact">
              <li className='ml-10 uppercase text-md hover:border-b hover:border-gray-300 hover:scale-105 ease-in duration-100'>
                Contact</li>
            </a>
          </ul>

          <div onClick={handleNav} className='md:hidden mr-5'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 h-screen w-full bg-black/70' : ''}>
        <div className={nav ? ' fixed left-0 top-0 h-screen w-[75%] sm:w-[60%] md:w-[45%] lg:w-[30%] px-5 py-2 bg-stone-50 ease-in duration-500'
          : 'fixed left-[-150%] top-0 px-5 py-2 bg-stone-50 ease-in duration-500'}>
          <div>
            <div className='flex justify-between items-center'>
              <Image className='cursor-pointer' src={amlogoImg.src}
                alt="AM Logo"
                width="100"
                height="100" />

              <div onClick={handleNav} className='rounded-full shadow-xl shadow-gray-400 cursor-pointer p-2 bg-stone-100'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-1 '>
              <p className='pb-4'>
                Lets build something legendary together
              </p>
            </div>

            <div className='mt-5'>
              <ul className='flex flex-col'>
                <a href="/#">
                  <li onClick={() => { setNav(false) }} className='py-3 uppercase text-sm hover:font-semibold'>Home</li>
                </a>
                <a href="/#about">
                  <li onClick={() => { setNav(false) }} className='py-3 uppercase text-sm hover:font-semibold'>About</li>
                </a>
                <a href="/#skills">
                  <li onClick={() => { setNav(false) }} className='py-3 uppercase text-sm hover:font-semibold'>Skills</li>
                </a>
                <a href="/#projects">
                  <li onClick={() => { setNav(false) }} className='py-3 uppercase text-sm hover:font-semibold'>Projects</li>
                </a>
                <a href="/#contact">
                  <li onClick={() => { setNav(false) }} className='py-3 uppercase text-sm hover:font-semibold'>Contact</li>
                </a>
              </ul>

              <div>
                <div className='pt-10'>
                  <p className='tracking-widest uppercase font-semibold text-center text-[#a0522d]'>Lets <span className='text-[#00A693]'> connect</span></p>
                </div >
                <div className='flex items-center justify-center gap-8 flex-wrap w-full my-4 '>
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
                    <BsFillPersonLinesFill color='#25D366' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar 
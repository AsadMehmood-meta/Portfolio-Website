"use client"
import twitchImg from "../../public/projects/twitch.jpg"
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'

const page = () => {

  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh]  bg-black/70 z-10" />
        <Image className='absolute z-1' fill style={{ objectFit: 'cover' }} src={twitchImg} alt='property' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h1 className="py-2">Twitch UI</h1>
          <h3>Next JS / Tailwind / Next Auth</h3>
        </div>
      </div>

      <div className="max-w mx-auto pt-8 p-5 grid md:grid-cols-5 gap-8 ">
        {/* Left Side */}
        <div className="col-span-4 p-2">
          <p className='uppercase tracking-widest text-2xl text-[#a0522d] font-semibold'>
            Project
          </p>
          <h1 className='text-[#00A693]'>
            Overview
          </h1>
          <p className='py-2 text-gray-700'>
          This appplication was built using NEXT.JS and is styled with
            Tailwind CSS. The application is hosted statically using Vercel.
            This is a mobile responsive recreation of Twitch.tv and features
            Next/Auth.js for authentication. Users may choose to be
            authenticated with either a Github account or a Google account. A
            few features to note with this project are lazy loading images using
            the Image component, built in routing, and Next/Auth Context.
          </p>
          <button className="px-8 py-2 mt-4 mr-8 text-white font-semibold bg-gradient-to-r from-[#a0522d] to-[#00A693]">Demo</button>
          <button className="px-8 py-2 mt-4 text-white font-semibold bg-gradient-to-r from-[#a0522d] to-[#00A693]">Code</button>
        </div>

        {/* Right Side */}
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl ">
          <div className="p-5">
            <p className=" text-lg text-gray-700 py-3">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="flex items-center py-2 text-gray-700"> <RiRadioButtonFill className="pr-1" color="#a0522d" /> Next.JS</p>

              <p className="flex items-center py-2 text-gray-700"> <RiRadioButtonFill className="pr-1" color="#00A693" /> JavaScript</p>

              <p className="flex items-center py-2 text-gray-700"><RiRadioButtonFill className="pr-1" color="#a0522d" /> Tailwind</p>

              <p className="flex items-center py-2 text-gray-700"><RiRadioButtonFill className="pr-1" color="#00A693" /> Next Auth</p>

              <p className="flex items-center py-2 text-gray-700"><RiRadioButtonFill className="pr-1" color="#a0522d" /> Github Auth</p>

              <p className="flex items-center py-2 text-gray-700"><RiRadioButtonFill className="pr-1" color="#00A693" /> Google Auth</p>

            </div>
          </div >
        </div>
        <a href="/#projects" className="underline cursor-pointer px-5">Back</a>
      </div>
    </div>
  )
}

export default page

  
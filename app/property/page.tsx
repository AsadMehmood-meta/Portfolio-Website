"use client"
import propertyImg from "../../public/projects/property.jpg"
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'

const page = () => {

  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh]  bg-black/70 z-10" />
        <Image className='absolute z-1' fill style={{ objectFit: 'cover' }} src={propertyImg} alt='property' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h1 className="py-2">Property Finder</h1>
          <h3>React Js / Tailwind / Firebase</h3>
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
            This app was built using React JS and is hosted on Firebase. Users
            are able to search properties based on an Address, City, or ZIP code
            to retrieve a list of active properties currently for sale. You will
            be able to view property information as well as the specific
            location of the property integrated with the Google Maps API. User
            authentication is available so you can signup and signin to your
            account with an email address in order to save your favorite
            properties. This is made possible with Zillow API.
          </p>
          <button className="px-8 py-2 mt-4 mr-8 text-white font-semibold bg-gradient-to-r from-[#a0522d] to-[#00A693]">Demo</button>
          <button className="px-8 py-2 mt-4 text-white font-semibold bg-gradient-to-r from-[#a0522d] to-[#00A693]">Code</button>
        </div>

        {/* Right Side */}
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl ">
          <div className="p-5">
            <p className=" text-lg text-gray-700 py-3">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="flex items-center py-2 text-gray-700"> <RiRadioButtonFill className="pr-1" color="#a0522d" /> React JS</p>

              <p className="flex items-center py-2 text-gray-700"> <RiRadioButtonFill className="pr-1" color="#00A693" /> JavaScript</p>

              <p className="flex items-center py-2 text-gray-700"><RiRadioButtonFill className="pr-1" color="#a0522d" /> Tailwind</p>

              <p className="flex items-center py-2 text-gray-700"><RiRadioButtonFill className="pr-1" color="#00A693" /> Firebase</p>

              <p className="flex items-center py-2 text-gray-700"><RiRadioButtonFill className="pr-1" color="#a0522d" /> Google API</p>

              <p className="flex items-center py-2 text-gray-700"><RiRadioButtonFill className="pr-1" color="#00A693" /> Zillow API</p>

            </div>
          </div >
        </div>
        <a href="/#projects" className="underline cursor-pointer px-5">Back</a>
      </div>
    </div>
  )
}

export default page

import React from 'react'
import Image from 'next/image';
import aboutImg from "../../public/assets/about.jpg"

export const About = () => {
  return (
    <div id='about' className='w-full sm:h-screen p-2 flex item-center mt-24 pt-16'>
      <div className='max-w-full m-auto md:grid grid-cols-3 gap-8 px-5'>
        <div className='col-span-2'>
          <p className='uppercase tracking-widest text-2xl text-[#a0522d] font-semibold py-4'>
          Who I Am
          </p>
          {/* <h1 className='py-4 text-[#00A693]'>
            Who I Am
          </h1> */}
          <p className='py-2 text-gray-700'>
            I have spent the last 7 years in the mechanical industry working as a professional radiographer. I have always had a knack for technology and working with computers. In 2021 I started working with HTML & CSS to make some minor edits ona small business website that I as operating. What I thought was just a few small edits turned into a love for programming.
          </p>
          <p className='py-2 text-gray-700'>
            Fascinated with how intricate programming can be I was quickly drawn to learn more. I started learning javascriot and was even more enthused with making websites interactive. I then started freelancing for e-commerce companies in the shopify platform. I am now spending my time building projects with React JS and learning new technologies.
          </p>
          <p className='py-3 text-gray-700 underline cursor-pointer'>
            Check out some of my latest projects.
          </p>
        </div>

        <div className='w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex justify-center items-center bg-gradient-to-r from-[#a0522d] to-[#00A693] p-2 hover:scale-105 ease-in duration-300 '>
        <Image className='rounded-xl lg:h-80'  src={aboutImg} alt="image" />
        </div>
      </div>
    </div>
  )
}

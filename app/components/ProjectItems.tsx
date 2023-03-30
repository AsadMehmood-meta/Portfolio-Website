import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FunctionComponent } from 'react'

interface ProjectItemsProps {
    title : string,
    backgroundImg : any,
    projectURL : any,
    tech : string,
    alt : string
}

export const ProjectItems : FunctionComponent<ProjectItemsProps> = ({title , backgroundImg, projectURL, tech, alt}) => {
    return (
        <div className='relative flex item-center justify-center h-auto w-full rounded-xl shadow-xl shadow-gray-400 p-4 group hover:bg-gradient-to-r from-[#a0522d] to-[#00A693]'>
            <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt={alt} />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                <h3 className='text-xl text-white text-center '>{title }</h3>
                <p className='pt-2 pb-4 text-white text-center text-md'>{tech}</p>
                <Link href={projectURL}>
                    <p className='py-3  text-center rounded-lg bg-white text-gray-700 font-bold text-lg'>More Info</p>
                </Link>
            </div>

        </div>
    )
}

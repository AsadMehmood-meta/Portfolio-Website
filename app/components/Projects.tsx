import React from 'react'
import Image from 'next/image';
import cryptoImg from "../../public/projects/crypto.jpg"
import propertyImg from "../../public/projects/property.jpg"
import netflixImg from "../../public/projects/netflix.jpg"
import twitchImg from "../../public/projects/twitch.jpg"
import { ProjectItems } from './ProjectItems';
import Link from 'next/link';

export const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w mx-auto px-5 py-24'>
                <p className='uppercase tracking-widest text-2xl text-[#a0522d] font-semibold'>
                    Projects
                </p>
                <h1 className='py-4 text-[#00A693]'>
                    What I have Built
                </h1>
                <div className='grid md:grid-cols-2 gap-8'>

                    <ProjectItems
                        title='Crypto App'
                        backgroundImg={cryptoImg}
                        projectURL='/crypto'
                        tech='React JS'
                        alt="crypto"
                    />

                    <ProjectItems
                        title='Property Finder'
                        backgroundImg={propertyImg}
                        projectURL='/property'
                        tech='React JS'
                        alt='Property'
                    />

                    <ProjectItems
                        title='Netflix App'
                        backgroundImg={netflixImg}
                        projectURL='/netflix'
                        tech='React JS'
                        alt='Netflix'
                    />

                    <ProjectItems
                        title='Twitch App'
                        backgroundImg={twitchImg}
                        projectURL='/twitch'
                        tech='React JS'
                        alt='Twitch'
                    />

                </div>
            </div>
        </div>
    )
}


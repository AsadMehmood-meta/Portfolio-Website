import React from 'react'
import Image from 'next/image';

export const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-5 py-24'>
            <div className='max-w mx-auto flex flex-col justify-center h-full'>
                <p className='uppercase  tracking-widest text-2xl text-[#a0522d] font-semibold'>
                    Skills
                </p>
                <h1 className='pt-4 pb-8 text-[#00A693]'>
                    What can I do
                </h1>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                   
                    <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src="/skills/html.png" alt="html" width={36} height={36} />
                            </div>
                            <div>
                                <h3 className='flex flex-col justify-center items-center'>
                                    HTML
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src="/skills/css.png" alt="css" width={36} height={36} />
                            </div>
                            <div>
                                <h3 className='flex flex-col justify-center items-center'>
                                    CSS
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src="/skills/javascript.png" alt="javascript" width={36} height={36} />
                            </div>
                            <div>
                                <h3 className='flex flex-col justify-center items-center'>
                                    JAVASCRIPT
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src="/skills/node.png" alt="node" width={36} height={36} />
                            </div>
                            <div>
                                <h3 className='flex flex-col justify-center items-center'>
                                    NODE.JS
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src="/skills/react.png" alt="react" width={36} height={36} />
                            </div>
                            <div>
                                <h3 className='flex flex-col justify-center items-center'>
                                    REACT
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src="/skills/nextjs.png" alt="nextjs" width={36} height={36} />
                            </div>
                            <div>
                                <h3 className='flex flex-col justify-center items-center'>
                                    NEXT.JS
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src="/skills/tailwind.png" alt="tailwind" width={36} height={36} />
                            </div>
                            <div>
                                <h3 className='flex flex-col justify-center items-center'>
                                    TAILWIND
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src="/skills/aws.png" alt="aws" width={36} height={36} />
                            </div>
                            <div>
                                <h3 className='flex flex-col justify-center items-center'>
                                    AWS
                                </h3>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

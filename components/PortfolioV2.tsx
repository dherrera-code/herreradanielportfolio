import React from 'react'
import { AuroraBackground } from './ui/aurora-background'
import { jetBrainsFont } from '@/app/layout'
import { Button } from 'flowbite-react'
import { ArrowRight } from 'lucide-react'


const PortfolioV2 = () => {
    return (
        <AuroraBackground className='bg-gray-200'>
            <div className='grid grid-cols-3 gap-5 p-20 mb-10'>
                <div className='col-span-2'>
                    <h5 className='text-[#1F108E]'>D A N I E L  _  H E R R E R A</h5>
                    <h1 className='text-6xl pt-3'>I build software that <br /><span className='text-[#4B41E1]'>solves real problems.</span></h1>

                    <p className='pt-2'>Aspiring software developer focused on web apps, UX, and clean code. Turning complex logic into intuitive digital experiences.</p>
                    <div className='flex gap-5 pt-4'>
                    <Button className='bg-[#3730A3]'>View Projects <ArrowRight /></Button>
                    <Button>Contact Me</Button>

                    </div>
                </div>
                <div className={`${jetBrainsFont.className} `}>
                    <div className='bg-gray-900 w-90 h-60 p-5 text-gray-300 text-sm rounded-lg'>
                        <div className='flex gap-2'>
                            <div className='bg-red-500 rounded-full w-3.5 h-3.5 mb-2'></div>
                            <div className='bg-purple-300 rounded-full w-3.5 h-3.5 mb-2'></div>
                            <div className='bg-gray-100 rounded-full w-3.5 h-3.5 mb-2'></div>
                        </div>
                        <div>
                            <p><span className='text-blue-500'>const</span> developer = {"{"}</p>
                            <p className='ps-4'>name: <span className='text-orange-400'>"Daniel Herrera"</span>,</p>
                            <p className='ps-4'>role: <span className='text-orange-400'>"Web Developer"</span>,</p>
                            <p className='ps-4'>focus: <span className='text-orange-400'>["UX" , "Clean Code"]</span>,</p>
                            <p className='ps-4'>status: <span className='text-orange-400'>"Building..."</span>,</p>
                            <p>{"};"}</p>
                            <br />
                            <p>/* Click to view more */</p>
                        </div>

                    </div>
                </div>
            </div>
        </AuroraBackground>
    )
}

export default PortfolioV2
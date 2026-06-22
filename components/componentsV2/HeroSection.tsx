import { AuroraBackground } from '../ui/aurora-background'
import { jetBrainsFont } from '@/app/layout'
import { Button } from 'flowbite-react'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
    return (
        <AuroraBackground className='bg-gray-200'>
            <section className='grid md:grid-cols-3 gap-5 p-5 sm:p-10 md:p-20 mb-10'>
                <div className='col-span-2'>
                    <h5 className='text-[#1F108E]'>D A N I E L <span className='ps-2'> H E R R E R A</span></h5>
                    <h1 className='text-4xl sm:text-6xl pt-3'>I build software that <br /><span className='text-[#4B41E1]'>solves real problems.</span></h1>
                    <p className='pt-2'>Aspiring software developer focused on web apps, UX, and clean code. Turning complex logic into intuitive digital experiences.</p>
                    <div className='flex gap-5 pt-4'>
                        <Button href='#project' className='bg-[#3730A3] px-5 py-2 group rounded-xs'>View Projects <ArrowRight className='transition-transform duration-300 ease-in-out group-hover:translate-x-3' /></Button>
                        <Button href='#contact' className='px-5 py-2 rounded-xs'>Contact Me</Button>
                    </div>
                </div>
                <div className={`${jetBrainsFont.className} hidden lg:block `}>
                    <div className='bg-gray-900 w-90 h-60 p-5 text-gray-300 text-sm rounded-lg'>
                        <div className='flex gap-2'>
                            <div className='bg-red-500 rounded-full w-3.5 h-3.5 mb-2'></div>
                            <div className='bg-purple-400 rounded-full w-3.5 h-3.5 mb-2'></div>
                            <div className='bg-gray-100 rounded-full w-3.5 h-3.5 mb-2'></div>
                        </div>
                        <div className='z-100'>
                            <p><span className='text-blue-500'>const</span> developer = {"{"}</p>
                            <p className='ps-4'>name: <span className='text-orange-400'>"Daniel Herrera"</span>,</p>
                            <p className='ps-4'>role: <span className='text-orange-400'>"Web Developer"</span>,</p>
                            <p className='ps-4'>focus: <span className='text-orange-400'>["UX" , "Clean Code"]</span>,</p>
                            <p className='ps-4'>status: <span className='text-orange-400'>"Building..."</span>,</p>
                            <p>{"};"}</p>
                            <br />
                            <p>/* Scroll to explore */</p>
                        </div>
                    </div>
                </div>
            </section>
        </AuroraBackground>
    )
}

export default HeroSection
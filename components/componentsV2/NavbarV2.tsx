'use client'
import { Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'

const NavbarV2 = () => {
    return (
        <div className='sticky top-0 z-50 border border-gray-900 shadow-lg'>
            <Navbar fluid className='bg-white text-gray-800 py-2'>
                <a href="#"><h1 className='px-5 lg:me-30 text-xl sm:text-2xl'>D.HERRERA</h1></a>
                <div className='md:hidden block'>
                    <div className='flex flex-row items-center justify-center gap-4 '>
                        <a target='_blank' href="https://github.com/dherrera-code">
                            <img title='Redirect to my GitHub' className='w-auto h-8' src="/assets/GitHub.svg" alt="GitHub Logo" />
                        </a>
                        <a target='_blank' href="https://www.linkedin.com/in/daniel-bravo-herrera/">
                            <img title='Redirect to my LinkedIn' className='w-auto h-8' src="/assets/LinkedIn.png" alt="LinkedIn Logo" />
                        </a>
                        <NavbarToggle />
                    </div>
                </div>
                <NavbarCollapse>
                    <NavbarLink className={`me-6 md:mt-1.5 text-gray-800 text-lg`} href="/#project">Projects</NavbarLink>
                    <NavbarLink className='me-6 md:mt-1.5 text-gray-800 text-lg' href="/#stack">Stack</NavbarLink>
                    <NavbarLink className='me-6 md:mt-1.5 text-gray-800 text-lg' href="/#contact">Contact</NavbarLink>
                    <a download='/HerreraDResumeATS.pdf' href='./HerreraDResumeATS.pdf' className='bg-[#1F108E] px-5 py-2 rounded-xl text-center text-white text-lg block md:hidden'>Resume</a>
                </NavbarCollapse>
                <div className='md:block hidden'>
                    <div className='flex gap-5 '>
                        <a target='_blank' href="https://github.com/dherrera-code">
                            <img title='Redirect to my GitHub' className='w-auto h-10 ' src="/assets/GitHub.svg" alt="GitHub Logo" />
                        </a>
                        <a target='_blank' href="https://www.linkedin.com/in/daniel-bravo-herrera/">
                            <img title='Redirect to my LinkedIn' className='w-auto h-10' src="/assets/LinkedIn.png" alt="LinkedIn Logo" />
                        </a>
                        <a title='Click to download resume!' download='/HerreraDResumeATS.pdf' href='./HerreraDResumeATS.pdf' className='bg-[#1F108E] px-5 py-2 rounded-xl text-white text-lg'>Resume</a>
                    </div>
                </div>
            </Navbar>
        </div>
    )
}

export default NavbarV2
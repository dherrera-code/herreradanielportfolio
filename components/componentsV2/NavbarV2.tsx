'use client'
import { Button, Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'

const NavbarV2 = () => {
    return (
        <div className='sticky top-0 z-50 border border-gray-900 shadow-lg'>
            <Navbar fluid className='bg-white text-gray-800 py-2'>
                <a href="#"><h1 className='ps-5 text-2xl'>D.HERRERA</h1></a>
                <NavbarToggle />
                <NavbarCollapse>
                    <NavbarLink className={`me-6 md:mt-1.5 text-gray-800 text-lg`} href="/#project">Projects</NavbarLink>
                    <NavbarLink className='me-6 md:mt-1.5 text-gray-800 text-lg' href="/#stack">Stack</NavbarLink>
                    <NavbarLink className='me-6 md:mt-1.5 text-gray-800 text-lg' href="/#contact">Contact</NavbarLink>
                    <a target='_blank' href='./HerreraDResumeCodestack.pdf' className='bg-[#1F108E] px-5 py-2 rounded-xl text-center text-white text-lg block md:hidden'>Resume</a>
                </NavbarCollapse>
                <a title='Click to download resume!' download='./HerreraDResumeCodestack.pdf' href='./HerreraDResumeCodestack.pdf' className='bg-[#1F108E] px-5 py-2 rounded-xl text-white text-lg md:block hidden'>Resume</a>
            </Navbar>
        </div>
    )
}

export default NavbarV2
'use client'
import { Button, Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'

const TopNavbar = () => {
    return (
        <div className='sticky top-0 z-50'>
            <Navbar fluid className='bg-black text-white py-2'>
                <a href="#"><h1 className='ps-5 text-3xl'>Daniel Herrera</h1></a>
                <NavbarToggle />
                <NavbarCollapse>
                    <NavbarLink className='me-6 md:mt-1.5 text-white text-xl' href="#about">
                        About
                    </NavbarLink>
                    <NavbarLink className='me-6 md:mt-1.5 text-white text-xl' href="/#skill">Skills</NavbarLink>
                    <NavbarLink className='me-6 md:mt-1.5 text-white text-xl' href="/#project">Projects</NavbarLink>
                    <NavbarLink className='me-6 self-center text-white' href="/#contact"><Button className='text-xl'>Contact</Button></NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </div>
    )
}

export default TopNavbar
'use client'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'
import { Link } from 'lucide-react'
import React from 'react'

const TopNavbar = () => {
    return (
        <div className='sticky top-0 z-50'>
            <Navbar fluid className='bg-black text-white py-2'>
                <a href="#Top"><h1 className='ps-5 text-3xl'>Daniel Herrera</h1></a>
                <NavbarToggle />
                <NavbarCollapse className='place-self-center'>
                    <NavbarLink className='me-6 mt-1.5 text-white text-xl pt-100' href="#">
                        About
                    </NavbarLink>
                    <NavbarLink className='me-6 mt-1.5 text-white text-xl' href="#">Skills</NavbarLink>
                    <NavbarLink className='me-6 mt-1.5 text-white text-xl' href="#project">Projects</NavbarLink>
                    <NavbarLink className='me-6 self-center text-white' href="#contact"><Button className='text-xl'>Contact</Button></NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </div>
    )
}

export default TopNavbar
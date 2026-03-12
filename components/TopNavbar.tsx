'use client'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'
import { Link } from 'lucide-react'
import React from 'react'

const TopNavbar = () => {
    return (
        <div>
            <Navbar fluid className='bg-black text-white py-10'>
                <a href="#Top"><h1 className='ps-5 text-3xl'>Daniel Herrera</h1></a>
                <NavbarToggle />
                <NavbarCollapse className='place-self-center'>
                    <NavbarLink className='me-6 self-center text-white text-xl pt-100' href="#">
                        About
                    </NavbarLink>
                    <NavbarLink className='me-6 self-center text-white text-xl' href="#">Services</NavbarLink>
                    <NavbarLink className='me-6 self-center text-white text-xl' href="#">Pricing</NavbarLink>
                    <NavbarLink className='me-6 self-center text-white' href="#"><Button className='text-xl'>Contact</Button></NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </div>
    )
}

export default TopNavbar
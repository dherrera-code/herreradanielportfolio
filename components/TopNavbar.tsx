'use client'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'
import { Link } from 'lucide-react'
import React from 'react'

const TopNavbar = () => {
    return (
        <div>
            <Navbar fluid className='bg-black text-white'>
                <h1 className='text-3xl'>Daniel Herrera</h1>
                <NavbarToggle />
                <NavbarCollapse>
                    <NavbarLink className='text-white' href="#">
                        Home
                    </NavbarLink>
                    <NavbarLink className='pe-4' href="#">
                        About
                    </NavbarLink>
                    <NavbarLink className='pe-4' href="#">Services</NavbarLink>
                    <NavbarLink className='pe-4' href="#">Pricing</NavbarLink>
                    <NavbarLink className='pe-4' href="#"><Button>Contact</Button></NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </div>
    )
}

export default TopNavbar
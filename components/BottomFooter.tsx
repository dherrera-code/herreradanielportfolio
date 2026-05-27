import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-react'
import React from 'react'

const BottomFooter = () => {
  return (
    <div className='border border-gray-400'>
        <Footer container className='rounded-none py-10'>
      <FooterCopyright className='ps-10 text-[#1F108E] text-md' href="#" by="Daniel B Herrera™ Build with Next JS" year={2026} />
      <FooterLinkGroup className='pe-10 text-gray-900 pt-5 flex items-center sm:pt-0 text-md'>
        <FooterLink href="#">GitHub</FooterLink>
        <FooterLink href="#">LinkedIn</FooterLink>
        <FooterLink href="#">Email</FooterLink>
      </FooterLinkGroup>
      {/* <p className='pe-10'>Created with Next.JS, Flowbite and ShadCn Libraries</p> */}
    </Footer>
    </div>
  )
}

export default BottomFooter
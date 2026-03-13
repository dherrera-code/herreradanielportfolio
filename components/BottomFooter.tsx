import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-react'
import React from 'react'

const BottomFooter = () => {
  return (
    <div>
        <Footer container className='bg-black text-white rounded-none'>
      <FooterCopyright className='ps-10 text-white' href="#" by="Daniel Herrera™" year={2026} />
      {/* <FooterLinkGroup className='pe-10'>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup> */}
      <p className='pe-10'>Created with Next.JS, Flowbite and ShadCn Libraries</p>
    </Footer>
    </div>
  )
}

export default BottomFooter
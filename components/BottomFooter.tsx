import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-react'
import React from 'react'

const BottomFooter = () => {
  return (
    <div>
        <Footer container>
      <FooterCopyright href="#" by="Daniel Herrera™" year={2026} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
    </div>
  )
}

export default BottomFooter
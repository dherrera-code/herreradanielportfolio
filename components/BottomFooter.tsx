import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-react'

const BottomFooter = () => {
  return (
    <div className='border border-gray-400'>
      <Footer container className='rounded-none py-10'>
        <FooterCopyright className='ps-10 text-[#1F108E] text-md' by="Daniel B Herrera™ Build with Next.js" year={2026} />
        <FooterLinkGroup className='pe-10 text-gray-900 pt-5 flex items-center sm:pt-0 text-md'>
          <FooterLink target='_blank' href="https://github.com/dherrera-code">GitHub</FooterLink>
          <FooterLink target='_blank' href="https://www.linkedin.com/in/daniel-bravo-herrera/">LinkedIn</FooterLink>
          <FooterLink href="mailto:dherr929@gmail.com">Email</FooterLink>
        </FooterLinkGroup>
      </Footer>
    </div>
  )
}

export default BottomFooter
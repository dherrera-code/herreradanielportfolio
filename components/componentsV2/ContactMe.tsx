import { LocateIcon, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import ContactForm from './ContactForm'

const ContactMe = () => {
  return (
    <div className='bg-[#F1F3FF] md:min-h-screen p-5 sm:p-10 md:p-20 grid grid-cols-1 md:grid-cols-2 '>
      <div>
        <h1 className='text-gray-900 text-4xl font-semibold pb-5'>Contact Me</h1>
        <p>If you have any inquiries about discussing new projects or opportunities, please reach out and I will reply at my earliest convenience!</p>

        <div className='mt-10 flex items-center gap-5'>
          <Mail size={60} className='bg-[#C3C0FF] p-4' color='#1F108E' />
          <div>
            <h5>Email:</h5>
            <p className='font-semibold text-shadow-none'>dherr929@gmail.com</p>
          </div>
        </div>
        <div className='mt-5 flex items-center gap-5'>
          <Phone size={60} className='bg-[#C3C0FF] p-4' color='#1F108E' />
          <div>
            <h5>Phone:</h5>
            <p className='font-semibold'>‪(209) 645-0921‬</p>
          </div>
        </div>
        <div className='mt-5 flex items-center gap-5'>
          <MapPin size={60} className='bg-[#C3C0FF] p-4' color='#1F108E' />
          <div>
            <h5>Location:</h5>
            <p className='font-semibold'>San Joaquin County, CA</p>
          </div>
        </div>
      </div>

      <div className='md:place-items-center pt-4 md:pt-0'>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactMe
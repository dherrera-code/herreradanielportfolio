import { Mail } from 'lucide-react'
import React from 'react'

const ContactMe = () => {
  return (
    <div id='contact' className='bg-gray-50 h-screen p-10 md:p-20 grid grid-cols-2 items-center'>
      <div>

        <h1 className='text-gray-900 text-4xl font-semibold pb-5'>Contact Me</h1>
        <p>If you have any inquiries about discussing new projects or opportunities, please reach out and I will reply at my earliest convenience!</p>


        <div className='mt-5 flex items-center gap-5'>
          <Mail size={60} className='bg-[#C3C0FF] p-4' color='#1F108E' />
          <div>
            <h5>Email:</h5>
            <p className='font-semibold'>dherr929@gmail.com</p>
          </div>

        </div>

        <div></div>
        <div></div>
      </div>
      <div>
        Insert form component Here!
        {/* Lets add a form component to have user input the following: Name, Email, Subject, Message and a button to send message!
        Also, All input fields should have input validation before submitting form! */}
      </div>
    </div>
  )
}

export default ContactMe
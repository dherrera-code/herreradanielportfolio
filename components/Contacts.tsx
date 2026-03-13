import { Card, Button } from 'flowbite-react'
import React from 'react'

const Contacts = () => {

    
    return (
        <div className='flex justify-center'>
            <div className='min-w-[85vw] bg-[#E5E7EB] rounded-md shadow-md p-5'>
                <h1 className='text-2xl'>Here is my Contact info and links to my LinkedIn, Githib Account and My Resume!</h1>
                <div className='flex flex-wrap gap-3 justify-around py-5'>

                <h1 className='text-xl'>Phone Number: (209) 542-5244</h1>
                <h1 className='text-xl'>Email: dherr@gmail.com</h1>
                </div>

                <div className='flex justify-around pt-5'>
                    <a target='_blank' ><img src="./assets/LinkedIn.png" className='w-[80px]' alt="LinkedIn Logo to redirect to my LinkedIn page!" /></a>
                    <a target='_blank' href='https://github.com/dherrera-code'><img src="./assets/Github.png" className='w-[80px]' alt="Github Logo" /></a>
                    <a target='_blank' href='https://github.com/dherrera-code'><img src="./assets/Resume File Btn.png" className='w-[80px]' alt="Link to open up my Resume!" /></a>
                </div>
            </div>
            
        </div>
    )
}

export default Contacts
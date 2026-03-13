import { Card, Button } from 'flowbite-react'
import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'

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
                    <HoverCard>
                        <HoverCardTrigger>
                            <a target='_blank' href='https://www.linkedin.com/in/daniel-herrera-1a964a3b6/' ><img src="./assets/LinkedIn.png" className='w-[80px]' alt="LinkedIn Logo to redirect to my LinkedIn page!" /></a>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <a target='_blank' href='https://www.linkedin.com/in/daniel-herrera-1a964a3b6/'>Open my LinkedIn Page!</a>
                        </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                        <HoverCardTrigger>
                            <a target='_blank' href='https://github.com/dherrera-code'><img src="./assets/Github.png" className='w-[80px]' alt="Github Logo" /></a> 
                        </HoverCardTrigger>
                        <HoverCardContent className='text-center'>
                            <a target='_blank' href='https://github.com/dherrera-code'>View my Github Repos!</a>
                        </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                        <HoverCardTrigger>
                            <a target='_blank' href='https://github.com/dherrera-code'><img src="./assets/Resume File Btn.png" className='w-[80px]' alt="Link to open up my Resume!" /></a>

                        </HoverCardTrigger>
                        <HoverCardContent>
                            <a target='_blank' href='https://github.com/dherrera-code'>Download my Resume PDF!</a>
                        </HoverCardContent>
                    </HoverCard>
                </div>
            </div>

        </div>
    )
}

export default Contacts
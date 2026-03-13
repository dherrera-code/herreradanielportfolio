import { Card, Button } from 'flowbite-react'
import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import Link from 'next/link'

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
                    {/* LinkedIn Link Card Icon */}
                    <HoverCard>
                        <Link target='_blank' href='https://www.linkedin.com/in/daniel-herrera-1a964a3b6/'>
                            <HoverCardTrigger>
                                <img src="./assets/LinkedIn.png" className='w-[80px]' alt="LinkedIn Logo to redirect to my LinkedIn page!" />
                            </HoverCardTrigger>
                        </Link>
                        <HoverCardContent className='text-center'>
                            <p>Open my LinkedIn Page!</p>
                        </HoverCardContent>
                    </HoverCard>
                    {/* Github Link Icon */}
                    <HoverCard>
                        <Link target='_blank' href='https://github.com/dherrera-code'>
                            <HoverCardTrigger>
                                <img src="./assets/Github.png" className='w-[80px]' alt="Github Logo" />
                            </HoverCardTrigger>
                        </Link>
                        <HoverCardContent className='text-center'>
                            <p>View my Github Repos!</p>
                        </HoverCardContent>
                    </HoverCard>
                    {/* Resume Card Icon */}
                    <HoverCard>
                        <Link target='_blank' href='./resumeDanielHerreraTestV1.pdf'>
                            <HoverCardTrigger>
                                <img src="./assets/file.svg" className='w-[80px]' alt="Link to open up my Resume!" />
                            </HoverCardTrigger>
                        </Link>
                        <HoverCardContent className='text-center'>
                            <p>Open Resume PDF in new tab</p>
                        </HoverCardContent>
                    </HoverCard>
                </div>
            </div>

        </div>
    )
}

export default Contacts
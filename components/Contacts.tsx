import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import Link from 'next/link'

const Contacts = () => {

    return (
        <div className='flex justify-center'>
            <div className='min-w-[85vw] bg-[#E5E7EB] rounded-md shadow-md p-5'>
                <h1 className='text-2xl'>Here is my Contact info and links to my LinkedIn, Githib Account and My Resume!</h1>
                <div className='flex flex-wrap gap-3 justify-around py-5'>

                    <h1 className='text-xl'>Phone Number: (209) 542-5244</h1>
                    <h1 className='text-xl'>Email: dherr929@gmail.com</h1>
                </div>

                <div className='flex justify-around pt-5'>
                    {/* LinkedIn Link Card Icon */}

                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-lg'>LinkedIn</h1>
                        <Link target='_blank' href='https://www.linkedin.com/in/daniel-herrera-1a964a3b6/'>
                            <img src="./assets/LinkedIn.png" className='w-[80px]' alt="LinkedIn Logo to redirect to my LinkedIn page!" />
                        </Link>
                    </div>

                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-lg'>GitHub</h1>
                        <Link target='_blank' href='https://github.com/dherrera-code'>
                            <img src="./assets/GitHub.svg" className='w-[80px]' alt="Github Logo!" />
                        </Link>
                    </div>

                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-lg'>Resume</h1>
                        <Link target='_blank' href='./HerreraDResumeCodestack.pdf'>
                            <img src="./assets/file.svg" className='w-[80px]' alt="File icon to open Resume!" />
                        </Link>
                    </div>
                    {/* Github Link Icon */}
                    {/* <a target='_blank' href='https://github.com/dherrera-code'>
                        <HoverCard>
                            <HoverCardTrigger>
                                <img src="./assets/Github.svg" className='w-[80px]' alt="Github Logo!" />
                            </HoverCardTrigger>
                            <HoverCardContent className='text-center'>
                                <p>View my Github Repos!</p>
                            </HoverCardContent>
                        </HoverCard>
                    </a> */}
                    {/* Resume Card Icon */}
                    {/* <a target='_blank' href='./resumeDanielHerreraTestV1.pdf'>
                        <HoverCard>
                            <HoverCardTrigger>
                                <img src="./assets/file.svg" className='w-[80px]' alt="a to open up my Resume!" />
                            </HoverCardTrigger>
                            <HoverCardContent className='text-center'>
                                <p>Open Resume PDF in new tab</p>
                            </HoverCardContent>
                        </HoverCard>
                    </a> */}
                </div>
            </div>

        </div>
    )
}

export default Contacts
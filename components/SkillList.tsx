import React from 'react'
import { IconButton } from './animate-ui/components/buttons/icon'


const SkillList = () => {
    return (
        <div className='flex flex-wrap gap-5 justify-center p-3'>
            <div className='w-[20%] place-items-center '>
                <h1>Front-End</h1>
                <div className='flex pt-5 gap-5 flex-wrap justify-center'>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/Next.js.png" alt="Next.Js png Logo!" />
                </IconButton>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/Vite.js.png" alt="" />
                </IconButton>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/React.png" alt="" />
                </IconButton><IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/Tailwind.png" alt="" />
                </IconButton>
                </div>
            </div>
            <div className='w-[20%] place-items-center'>
                <h1>Back-End</h1>
                <div className='flex pt-5 gap-5 flex-wrap justify-center'>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/SQL.png" alt="" />
                </IconButton>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/Net Core.png" alt="" />
                </IconButton>
                
                </div>
            </div>
            <div className='w-[20%] place-items-center'>
                <h1>Languages</h1>

                <div className='flex pt-5 gap-5 flex-wrap justify-center'>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/JavaScript.png" alt="" />
                </IconButton>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/TypeScript.png" alt="" />
                </IconButton>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/CSharp.png" alt="" />
                </IconButton>
                </div>
            </div>
            <div className='w-[20%] place-items-center'>
                <h1>Tools</h1>
                <div className='flex pt-5 gap-5 flex-wrap justify-center'>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/VS Code.png" alt="" />
                </IconButton>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/Slack.png" alt="" />
                </IconButton>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/Azure.png" alt="" />
                </IconButton>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/postman.png" alt="" />
                </IconButton>
                </div>
            </div>
        </div>
    )
}

export default SkillList
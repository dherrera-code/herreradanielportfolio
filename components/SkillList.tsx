import React from 'react'
import { IconButton } from './animate-ui/components/buttons/icon'


const SkillList = () => {
    return (
        <div className='flex flex-wrap gap-5 justify-center p-3'>
            <div className='md:w-[20%] mx-2 place-items-center '>
                <h1 className='text-3xl'>Front-End</h1>
                <div className='flex pt-5 gap-5 flex-wrap justify-center'>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/Next.js.png" alt="Next.Js png Logo!" />
                </IconButton>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/Vite.js.png" alt="Vite Logo" />
                </IconButton>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/React.png" alt="React Logo" />
                </IconButton><IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/Tailwind.png" alt="Tailwind Logo" />
                </IconButton>
                </div>
            </div>
            <div className='md:w-[20%] mx-2 place-items-center'>
                <h1 className='text-3xl'>Back-End</h1>
                <div className='flex pt-5 gap-5 flex-wrap justify-center'>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/SQL.png" alt="Sql Server" />
                </IconButton>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/Net Core.png" alt="Dotnet Logo" />
                </IconButton>
                
                </div>
            </div>
            <div className='md:w-[20%] mx-2 place-items-center'>
                <h1 className='text-3xl'>Languages</h1>

                <div className='flex pt-5 gap-5 flex-wrap justify-center'>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/JavaScript.png" alt="Javascript logo" />
                </IconButton>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/TypeScript.png" alt="Typescript Logo" />
                </IconButton>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/CSharp.png" alt="CSharp Logo" />
                </IconButton>
                </div>
            </div>
            <div className='md:w-[20%] mx-2 place-items-center'>
                <h1 className='text-3xl'>Tools</h1>
                <div className='flex pt-5 gap-5 flex-wrap justify-center'>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/VS Code.png" alt="VSCode Logo" />
                </IconButton>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/Slack.png" alt="Slack Logo" />
                </IconButton>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/Azure.png" alt="Azure Logo" />
                </IconButton>
                <IconButton variant={"accent"} size={"lg"} >
                    {/* <Icon /> */}
                    <img src="./assets/postman.png" alt="Postman Logo" />
                </IconButton>
                </div>
            </div>
        </div>
    )
}

export default SkillList
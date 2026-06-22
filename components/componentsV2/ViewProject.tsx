import { IProjectData } from '@/lib/Interface/interface'
import { Button, Card } from 'flowbite-react'
import { MyProjectsData } from '@/lib/ProjectData/SeedProjectData';
import Link from 'next/link';

const ViewProject = () => {
    const projects: IProjectData[] = MyProjectsData

    return (
        <div className='bg-gray-50 p-5 sm:p-10 md:p-20 flex flex-col '>
            <div className='pb-5 flex justify-between '>
                <div>
                    <h1 className='text-3xl md:text-5xl font-semibold pb-3'>Selected Projects</h1>
                    <p className='text-[0.875rem] lg:text-[1rem] text-gray-500'>Here is a collection of applications focusing on performance, accessibility, and clean design</p>
                </div>
                <div className='text-gray-400 text-lg flex items-center'>
                    <p className='text-sm hidden md:block'>03 / Project Total</p>
                </div>
            </div>
            <div className='pb-10 '>
                <div className='flex items-stretch flex-wrap flex-row justify-center gap-9'>
                    {projects.map((project) => (
                        <Card key={project.Id} className="max-w-sm bg-slate-100 hover-card hover:border hover:border-black"
                            imgAlt={project.Title}
                            imgSrc={project.ImgSrc}
                        >
                            <div className='flex flex-col justify-between!'>
                                <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                                    {project.Title}
                                </h5>
                                <p className="font-normal text-[0.825rem] text-gray-700 dark:text-gray-400">
                                    {project.Description}
                                </p>
                                <div className='grid grid-cols-2 gap-10 pt-5 place-items-center'>
                                    <Link target='_blank' href={project.HostLink}>
                                        <Button className='px-10 text-[0.75rem] lg:text-[1rem] hover:bg-[#6b63d1] bg-[#3730A3] whitespace-nowrap' >
                                            Live Demo
                                        </Button>
                                    </Link>
                                    <Link target='_blank' href={project.GithubLink}>
                                        <Button className='px-10 text-[0.75rem] lg:text-[1rem] text-black border hover:bg-gray-200 bg-white border-[#3730A3]'>
                                            Source
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ViewProject
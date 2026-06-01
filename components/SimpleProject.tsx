'use client'
import { IProjectData } from '@/lib/Interface/interface';
import { MyProjectsData } from '@/lib/ProjectData/SeedProjectData';
import { Card, Button } from 'flowbite-react'
import Link from 'next/link'
import { useState } from 'react'

const SimpleProject = () => {
    // const [projects, setProjects] = useState<IProjectData[]>(MyProjectsData);
    const projects: IProjectData[] = MyProjectsData

    return (
        <div className='flex flex-wrap flex-row justify-center gap-9'>
            {projects.map((project) => (
                <Card key={project.Id} className="max-w-sm bg-slate-100"
                    imgAlt={project.Title}
                    imgSrc={project.ImgSrc}
                >
                    <div>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                            {project.Title}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {project.Description}
                        </p>
                        <div className='grid grid-cols-2 gap-10 pt-5 place-items-center'>
                            <Link target='_blank' href={project.HostLink}>
                                <Button >
                                    View Site
                                </Button>
                            </Link>
                            <Link target='_blank' href={project.GithubLink}>
                                <Button>
                                    View Code
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    )
}

export default SimpleProject
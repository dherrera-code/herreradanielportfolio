import React from 'react'
import { FlipCard } from './animate-ui/components/community/flip-card'

const ProjectList = () => {
    const data =
        [
            {
                name: 'Animate UI',
                
                image:
                    'https://pbs.twimg.com/profile_images/1950218390741618688/72447Y7e_400x400.jpg',
                bio: 'A fully animated, open-source component distribution built with React, TypeScript, Tailwind CSS, and Motion.',
                
                socialLinks: {
                    github: 'https://github.com',
                    
                },
            },
        ];
    return (
        <div>
            <div>
                <FlipCard data={data[0]}></FlipCard>
            </div>
        </div>
    )
}

export default ProjectList
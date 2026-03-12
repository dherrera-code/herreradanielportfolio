import React from 'react'
import { IconButton } from './animate-ui/components/buttons/icon'


const SkillList = () => {
    return (
        <div className='flex justify-center p-3'>
            <IconButton variant={"accent"} size={"lg"} >
                {/* <Icon /> */}
                <img src="./assets/LinkedIn.png" alt="" />
            </IconButton>
        </div>
    )
}

export default SkillList
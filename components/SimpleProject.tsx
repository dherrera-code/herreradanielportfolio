import { Card, Button } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

const SimpleProject = () => {
    return (
        <div className='flex flex-wrap flex-row justify-center gap-6'>
            <Card  className="max-w-sm bg-slate-100"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="../assets/my-inspiration-website.png"
            >

                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {/* <img src='../public/assets/my-inspiration-website.png' alt="" /> */}
                    My Inspirational Person Website
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    This webpage is dedicated to my sister who inspires me to work hard towards my goals and make my dreams come true!
                </p>
                <div className='grid grid-cols-2 gap-10 place-items-center'>
                    <Link target='_blank' href={"https://salmon-forest-0e150bd1e.6.azurestaticapps.net/"}>
                        <Button >
                            View Site
                        </Button>
                    </Link>
                    <Link target='_blank' href={"https://github.com/dherrera-code/inspirationalperson"}>
                        <Button>
                            View Code
                        </Button>
                    </Link>

                </div>
            </Card>

           <Card  className="max-w-sm bg-slate-100"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="../assets/PokedexAPIWebsite.png"
            >

                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {/* <img src='../public/assets/my-inspiration-website.png' alt="" /> */}
                    Pokedex Entries
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    This website was created with HTML styled in Tailwind and used a free Pokemon API to get all relevant data on a searched Pokemon!
                </p>
                <div className='grid grid-cols-2 gap-10 place-items-center'>
                    <Link target='_blank' href={"https://ashy-mushroom-0fe13a81e.6.azurestaticapps.net/"}>
                        <Button >
                            View Site
                        </Button>
                    </Link>
                    <Link target='_blank' href={"https://github.com/dherrera-code/DHPokemonAPI"}>
                        <Button>
                            View Code
                        </Button>
                    </Link>

                </div>
            </Card>

            <Card  className="max-w-sm bg-slate-100"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="../assets/all-for-one-nextjsbuild.png"
            >

                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {/* <img src='../public/assets/my-inspiration-website.png' alt="" /> */}
                    All For One with Next.js
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    This website represent the culmination of what I learned about working with Next.JS and building a web API from the ground up!
                </p>
                <div className='grid grid-cols-2 gap-10 place-items-center'>
                    <Link target='_blank' href={"https://happy-sand-00bb84c1e.1.azurestaticapps.net/"}>
                        <Button >
                            View Site
                        </Button>
                    </Link>
                    <Link target='_blank' href={"https://github.com/dherrera-code/allforonenextjsrebuild"}>
                        <Button>
                            View Code
                        </Button>
                    </Link>

                </div>
            </Card>

        </div>
    )
}

export default SimpleProject
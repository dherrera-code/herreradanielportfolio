
const AboutSection = () => {
    const languages = ["JavaScript", "C#", "Typescript", "HTML", "CSS"];
    const backEnd = ["SQL", ".NET Core", "EF Core"];
    const frontEnd = ["Next.js", "React", "TailwindCSS", "Bootstrap"];
    const tools = ["VSCode", "Slack", "Azure", "Postman"];
    return (
        <div id='stack' className='bg-[#F1F3FF] min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-5 p-5 sm:p-10 md:p-20'>
            <div className='place-items-center mx-auto sm:mx-0 lg:place-items-start md:ps-8'>
                <img className='max-h-60 lg:max-h-120 w-auto place-items-center shadow-lg' src="/assets/headshot.jpg" alt="Daniel Herrera's Professional Headshot!" />
            </div>
            <div>
                <h1 className='text-gray-900 font-semibold text-3xl pb-4'>The Journey</h1>
                <p className='text-gray-500 pb-4 text-[0.75rem] md:text-[0.875rem] lg:text-[1rem]'>My journey into software development began with a year‑long full‑stack program where I built a strong foundation in modern web technologies. I gained hands‑on experience creating responsive user interfaces and implementing functionality through RESTful API endpoints, as well as designing and managing relational databases via SQL. </p>
                <p className='text-gray-500 text-[0.75rem] md:text-[0.875rem] lg:text-[1rem]'>I later interned at CodeStack as a Web Developer, contributing to full‑stack projects that spanned the entire development lifecycle — from front‑end features to back‑end logic and database operations. I’m comfortable working across the stack, using React and Next.js on the front end and .NET framework with SQL on the back end to build reliable, scalable applications.</p>

                <h1 className='text-gray-900 font-semibold text-3xl py-4'>Technical Arsenal</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <div>
                        <h1 className='pb-3 text-[#1F108E]'>LANGUAGES</h1>
                        <div className='flex flex-row flex-wrap gap-y-2 gap-x-2'>
                            {languages.map((lang, idx) => (
                                <p key={idx} title={lang} className='px-3 py-2 me-2 bg-white rounded-md border shadow-md text-[0.875rem] lg:text-[1rem]'>{lang}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1 className='pb-3 text-[#1F108E]'>FRONT-END</h1>
                        <div className='flex flex-row flex-wrap gap-y-2 gap-x-2'>
                            {frontEnd.map((frontE, idx) => (
                                <p key={idx} title={frontE} className='px-3 py-2 me-2 bg-white rounded-md border shadow-md text-[0.875rem] lg:text-[1rem]'>{frontE}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1 className='pb-3 text-[#1F108E]'>BACK-END</h1>
                        <div className='flex flex-row flex-wrap gap-y-2 gap-x-2'>
                            {backEnd.map((backE, idx) => (
                                <p key={idx} title={backE} className='px-3 py-2 me-2 bg-white rounded-md border shadow-md text-[0.875rem] lg:text-[1rem]' >{backE}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1 className='pb-3 text-[#1F108E]'>Tools</h1>
                        <div className='flex flex-row flex-wrap gap-y-2 gap-x-2'>
                            {tools.map((tool, idx) => (
                                <p key={idx} title='tool' className='px-3 py-2 me-2 bg-white rounded-md border shadow-md text-[0.875rem] lg:text-[1rem]'>{tool}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
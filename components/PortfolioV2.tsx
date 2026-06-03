import AboutSection from './componentsV2/AboutSection'
import ContactMe from './componentsV2/ContactMe'
import HeroSection from './componentsV2/HeroSection'
import ViewProject from './componentsV2/ViewProject'

const PortfolioV2 = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ViewProject />
            <hr className='text-gray-900' />
            <ContactMe />
            {/* <div className='bg-[#F1F3FF] h-screen grid grid-cols-2 gap-5 p-10 md:p-20'>
                <div>
                    <img className='h-120 place-items-center' src="/assets/headshot.jpg" alt="Daniel Herrera's Professional Headshot!" />
                </div>
                <div>
                    <h1 className='text-gray-900 font-semibold text-3xl pb-4'>The Journey</h1>
                    <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias impedit voluptatum, placeat veniam eveniet possimus voluptate ipsa, consequuntur vitae neque sed in repudiandae! Assumenda atque veritatis aspernatur, quasi rem exercitationem asperiores distinctio vero in voluptate consequatur esse culpa! Ex dolorum quam molestias fugit sunt rerum cumque natus incidunt, porro quia!</p>

                    <h1 id='stack' className='text-gray-900 text-3xl py-4'>Technical Arsenal</h1>
                    <div className='grid grid-cols-2'>
                        <div className='flex flex-row flex-wrap gap-4'>
                            <h1 className='pb-3 gap-4'>Front-End</h1>
                           
                                <p className='px-3 py-2 me-2 bg-white rounded-md border shadow-md'>React.js</p>
                                <p className='px-3 py-2 me-2 bg-white rounded-md border shadow-md'>TailwindCSS</p>
                                <p className='px-3 py-2 me-2 bg-white rounded-md border shadow-md'>Typescript</p>
                            
                        </div>
                        <div className='flex flex-row flex-wrap gap-4'>
                            <h1 className='pb-3 gap-4'>Back-End</h1>
                            <div>
                                <span className='px-3 py-2 me-2 bg-white rounded-md border shadow-md'>React.js</span>
                                <span className='px-3 py-2 me-2 bg-white rounded-md border shadow-md'>TailwindCSS</span>
                                <span className='px-3 py-2 me-2 bg-white rounded-md border shadow-md'>Typescript</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default PortfolioV2
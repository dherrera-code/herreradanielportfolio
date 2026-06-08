import AboutSection from './componentsV2/AboutSection'
import ContactMe from './componentsV2/ContactMe'
import HeroSection from './componentsV2/HeroSection'
import ViewProject from './componentsV2/ViewProject'

const PortfolioV2 = () => {
    return (
        <>
            <HeroSection />
            <section id='stack'>
                <AboutSection />
            </section>
            <section id='project'>
                <ViewProject />
            </section>
            <hr className='text-gray-900' />
            <section id='contact'>
                <ContactMe />
            </section>
        </>
    )
}

export default PortfolioV2

import Contacts from "@/components/Contacts";
import ProjectList from "@/components/ProjectList";
import SimpleProject from "@/components/SimpleProject";
import SkillList from "@/components/SkillList";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen justify-center font-sans text-black">
      {/* Landing Page  */}
      <div className="bg-[url('../public/assets/shapes-bg.jpg')] h-screen  text-white bg-center bg-cover text-[40px] sm:text-[60px]">
        <div className="ps-10 pt-20">
          <div>

            <h1>Daniel Herrera</h1>
            <h1>Fullstack Developer!</h1>
          </div>
          <h1 className="pt-20">Time to Save the World!</h1>

        </div>
      </div>
      {/* eef6ff, f5f0ff f8fafc E5E7EB f3f4f6  */}
      <div className="bg-[#eef6ff]">

      {/* About section */}
        <section id="about" className="grid sm:grid-cols-2 px-10 sm:px-20 py-5 gap-5">
          <div>
        <h1 className="text-3xl py-5">Introduction</h1>
            {/* Add Description about me!  */}
            <p className="text-[18px]">Since, Attending School at Codestack Academy, I honed my skills to become a Fullstack Developer where I can create a front-end Interface and back-end database and web API's from the ground up! I will always strive towards becoming a better Developer and I’m always willing to learn new skills!</p>
          </div>
          <div className="place-items-center">
            <img className="h-80 rounded-md" src="./assets/SelfeDaniel.jpg" alt="Professional Image of myself!" />
          </div>
        </section>

      {/* Skills Section */}
      <section className="py-5">
        <h1 id="skill" className="text-4xl text-center py-10">My Skills</h1>
        <SkillList></SkillList>
      </section>

      </div>

      {/* Projects Section */}
      <section className="py-5 pb-10">
        <h1 id="project" className="text-4xl text-center pb-10">My Projects</h1>
        {/* <ProjectList></ProjectList> */}
        <SimpleProject></SimpleProject>
      </section>


      {/* contact section */}
      <div className="pb-20 sm:pb-10">
        <h1 id="contact" className="text-4xl text-center py-10">Contact Me</h1>
        <Contacts></Contacts>

      </div>

    </main>
  );
}

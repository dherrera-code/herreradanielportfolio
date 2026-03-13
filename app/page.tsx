
import Contacts from "@/components/Contacts";
import ProjectList from "@/components/ProjectList";
import SimpleProject from "@/components/SimpleProject";
import SkillList from "@/components/SkillList";

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen justify-center font-sans text-black">
      {/* Landing Page  */}
      <div className="bg-[url('../public/assets/shapes-bg.jpg')] h-screen  text-white bg-center bg-cover text-[60px]">
        <div className="ps-10 pt-20">
          <div>

            <h1>Daniel Herrera</h1>
            <h1>Fullstack Developer!</h1>
          </div>
          <h1 className="pt-20">Time to Save the World!</h1>

        </div>
      </div>
      {/* About section */}
      <h1 className="text-3xl ps-10 py-5">Introduction</h1>
      <section className="grid sm:grid-cols-2 px-10 sm:px-20">
        <div></div>
        <div className="place-items-end">
          <img className="h-100 rounded-md " src="./assets/SelfeDaniel.jpg" alt="Professional Image of myself!" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-5">
        <h1 id="skill" className="text-3xl text-center py-10">My Skills</h1>
        <SkillList></SkillList>
      </section>

      {/* Projects Section */}
      <section className="py-5">
        <h1 id="project" className="text-3xl text-center py-10">My Projects</h1>
        {/* <ProjectList></ProjectList> */}
        <SimpleProject></SimpleProject>

      </section>
      {/* contact section */}
      <div className="py-5 pb-10">
        <h1 id="contact" className="text-3xl text-center py-10">Contact Me</h1>
        <Contacts></Contacts>

      </div>


    </main>
  );
}

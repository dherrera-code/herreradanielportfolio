
import ProjectList from "@/components/ProjectList";

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen justify-center font-sans text-black">

      <div className="bg-[url('../public/assets/shapes-bg.jpg')] h-screen  text-white bg-center bg-cover text-[60px]">
        <div className="ps-20 grid items-center h-screen">
          <div>

          <h1>Daniel Herrera</h1>
          <h1>Fullstack Developer!</h1>
          </div>
          <h1>Time to Save the World!!!</h1>

        </div>
      </div>

      <div>
        <ProjectList></ProjectList>

      </div>
    </main>
  );
}

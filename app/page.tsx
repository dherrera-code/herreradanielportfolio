
import ProjectList from "@/components/ProjectList";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen justify-center  font-sans text-black">
      <main className="bg-red-400">
        <h1>Hello Daniel!</h1>
        
      </main>
      <div>
        <ProjectList></ProjectList>

      </div>
    </div>
  );
}

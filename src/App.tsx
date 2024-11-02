import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import ContactMe from "./components/Contact";

function App() {
  return (
    <>
      <div className="fixed min-h-screen inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <ContactMe />
      </main>
    </>
  );
}

export default App;

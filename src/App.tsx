import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="fixed min-h-screen inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
      </main>
    </>
  );
}

export default App;

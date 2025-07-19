import ThemeProvider from "./context/ThemeProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FloatingCards from "./components/FloatingCards";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen transition-all duration-300">
        <Navbar />
        <div className="pt-12">
          <Hero />
        </div>
        <div className="mt-24">
          <FloatingCards />
        </div>
        <Services />
      </div>
    </ThemeProvider>
  );
}

export default App;

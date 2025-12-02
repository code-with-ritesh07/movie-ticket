import { Navbar } from "./components/Home/Navbar";
import { MovieSection } from "./MovieSection";

const HomePage = () => {
  return (
    <main className="min-h-screen max-h-screen flex flex-col">
      <Navbar />
      
      <MovieSection />
    </main>
  );
};

export default HomePage;

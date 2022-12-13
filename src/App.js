import Analitics from "./companents/Analitics";
import Cards from "./companents/Cards";
import Footer from "./companents/Footer";
import Hero from "./companents/Hero";
import Navbar from "./companents/Navbar";
import Newslatter from "./companents/Newslatter";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analitics />
      <Newslatter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./js/carousel";
import Testimonials from "./js/testimonials";
import Innovate from "./js/innovate";
import Contact from "./js/contact";
import Footer from "./js/footer";
import Navbar from "./js/navbar";
import Home from "./js/home";
import About from "./js/about";
import Services from "./js/services";
import Article from "./js/article";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Article/>
      <Carousel />
      <Testimonials />
      <Innovate />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;

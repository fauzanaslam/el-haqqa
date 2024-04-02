import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Features from "../components/Features";
import About from "../components/About";
import Article from "../components/Article";
import News from "../components/News";
import Pricing from "../components/Pricing";
import Newslatter from "../components/Newslatter";
import Footer from "../shared/Footer";

const HomePage = () => {
  return (
    <div>
      <>
        <Navbar />
        <Home />
        <Features />
        <About />
        <Article />
        <News />
        <Pricing />
        <Newslatter />
        <Footer />
      </>
    </div>
  );
};

export default HomePage;

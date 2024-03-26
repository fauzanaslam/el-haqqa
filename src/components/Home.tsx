import banner from "../assets/hero.png";
import Banner from "../shared/Banner";

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
      <Banner
        banner={banner}
        heading="Flashsoft Indonesia"
        subheading="Software Development and Programming School"
        btn1="Get Started"
        // btn2="Discount"
      />
    </div>
  );
};

export default Home;

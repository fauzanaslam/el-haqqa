import Banner from "../shared/Banner";
import Lottie from "lottie-react";
import homeAnimation from "../assets/home.json";

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20" id="home">
      <div className="gradientBg rounded-xl rounded-br-[80px] px-8">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center py-2">
          <Lottie animationData={homeAnimation} className="w-1/2" />
          <Banner
            heading="Flashsoft Indonesia"
            subheading="Software Development and Programming School"
            btn1="Hubungi Kami"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

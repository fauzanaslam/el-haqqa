import Banner from "../shared/Banner";
import Lottie from "lottie-react";
import homeAnimation from "../assets/school.json";

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20" id="home">
      <div className="gradientBg rounded-xl rounded-br-[80px] px-8">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center">
          <Lottie
            animationData={homeAnimation}
            className="md:w-[500px] py-12"
          />
          <Banner
            heading="Achievement, Sholeh, Intelect, Character - ASIC"
            subheading="Born to be ASIC Generation"
            btn1="Hubungi Kami"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

import Banner from "../shared/Banner";
import Lottie from "lottie-react";
import contactUs from "../assets/contact-us.json";

const Newslatter = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto my-12">
      <div className="gradientBg rounded-xl rounded-br-[80px] px-8">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-5">
          <Lottie animationData={contactUs} />
          <Banner
            heading="Tunggu apalagi?"
            subheading="Belajar dengan kurikulum terupdate dan di mentorin oleh expert"
            btn1="Hubungi Kami"
          />
        </div>
      </div>
    </div>
  );
};

export default Newslatter;

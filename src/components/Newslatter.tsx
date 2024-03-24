import Banner from "../shared/Banner";
import bannerImg from "../assets/bannerImg.png";

const Newslatter = () => {
  return (
    <div className="md:px-14 p-4 max-s-screen-2xl mx-auto my-12">
      <Banner
        banner={bannerImg}
        heading="Lorem ipsum dolor sit amet."
        subheading="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, odit?"
        btn1="Whatsapp"
        btn2=""
      />
    </div>
  );
};

export default Newslatter;

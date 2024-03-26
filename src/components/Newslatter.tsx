import Banner from "../shared/Banner";
import bannerImg from "../assets/newslatter.png";

const Newslatter = () => {
  return (
    <div className="md:px-14 p-4 max-s-screen-2xl mx-auto my-12">
      <Banner
        banner={bannerImg}
        heading="Tunggu apalagi?"
        subheading="Belajar dengan kurikulum terupdate dan di mentorin oleh expert"
        btn1="Whatsapp"
        // btn2=""
      />
    </div>
  );
};

export default Newslatter;

import banner from "../assets/banner.png";
import Banner from "../shared/Banner";

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
      <Banner
        banner={banner}
        heading="Lorem ipsum dolor sit amet."
        subheading="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil dicta quas tenetur reiciendis tempora consequatur illo voluptas aliquid ut sit!"
        btn1="Get Started"
        btn2="Discount"
      />
    </div>
  );
};

export default Home;

import logo from "../assets/flashsoft.png";
import fb from "../assets/facebookImg.png";
import ig from "../assets/instagramImg.png";
import tw from "../assets/twitterImg.png";
import li from "../assets/linkedinImg.png";

const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a
            href="/"
            className="text-2xl font-semibold items-center space-x-3 text-primary"
          >
            <img src={logo} alt="" className="w-10 inline-block items-center" />
            <span className="text-white">Flashsoft</span>
          </a>
          <p className="md-1/2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
            praesentium!
          </p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
            />
            <input
              type="submit"
              value="Subcribe"
              className="px-4 py-2 bg-secondary rounded-md ml-2 cursor-pointer hover:bg-white hover:text-primary transition-all duration-300"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Platform</h4>
            <ul className="space-y-3">
              <a href="" className="block hover:text-gray-300">
                Overview
              </a>
              <a href="" className="block hover:text-gray-300">
                Features
              </a>
              <a href="" className="block hover:text-gray-300">
                About
              </a>
              <a href="" className="block hover:text-gray-300">
                Pricing
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Help</h4>
            <ul className="space-y-3">
              <a href="" className="block hover:text-gray-300">
                Overview
              </a>
              <a href="" className="block hover:text-gray-300">
                Features
              </a>
              <a href="" className="block hover:text-gray-300">
                About
              </a>
              <a href="" className="block hover:text-gray-300">
                Pricing
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Contact</h4>
            <ul className="space-y-3">
              <p className="hover:text-gray-300">Overview</p>
              <p className="hover:text-gray-300">Features</p>
              <p className="hover:text-gray-300">About</p>
              <p className="hover:text-gray-300">Pricing</p>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <p>@ Flashsoft 2024. All rights reversed</p>
        <div className="flex items-center space-x-5">
          <img
            src={fb}
            alt=""
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
          />
          <img
            src={ig}
            alt=""
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
          />
          <img
            src={tw}
            alt=""
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
          />
          <img
            src={li}
            alt=""
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

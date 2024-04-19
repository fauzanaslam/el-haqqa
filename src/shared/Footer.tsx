import fb from "../assets/facebookImg.png";
import ig from "../assets/instagramImg.png";
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
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9w5g7s9UT_XyHNDTQeBCUORwbHoMS2RWWZmpYiqD-PIc1RN5XttcF2C-K5MNPeO567ZU9r_2wE_O6VGq1ZdtyzU8PaD1gsvvIS6ThCh6V8NAOgsEFkHW97BjvReA40HBwXD5VUKtZfAjJXprqhWXnz_AanpEAeT9xu0bpnOtbYl7x40UQ8NtocUs/w75-h96/LOGO%20ELHAQQA1%20-%20White1.png"
              alt=""
              className="w-10 inline-block items-center"
            />
            <span className="text-white">El Haqqa Quranic School</span>
          </a>
          <p className="md-1/2">
            Achievement, Sholeh, Intelect, Character - ASIC
          </p>
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
                How does it works?
              </a>
              <a href="" className="block hover:text-gray-300">
                Where to ask question?
              </a>
              <a href="" className="block hover:text-gray-300">
                How to play?
              </a>
              <a href="" className="block hover:text-gray-300">
                What is needed for this?
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Contacts</h4>
            <ul className="space-y-3">
              <p className="hover:text-gray-300">+6281-1760-7047</p>
              <p className="hover:text-gray-300">
                elhaqqaquranicschool@gmail.com
              </p>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <p>@ El Haqqa Quranic School 2024. All rights reversed</p>
        <div className="flex items-center space-x-5">
          <a href="https://www.facebook.com/flashsoftindonesia/">
            <img
              src={fb}
              alt=""
              className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
            />
          </a>
          <a href="https://www.instagram.com/flashsoftindonesia/?hl=en">
            <img
              src={ig}
              alt=""
              className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
            />
          </a>
          <a href="https://www.linkedin.com/company/flashsoft-indonesia/mycompany/">
            <img
              src={li}
              alt=""
              className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

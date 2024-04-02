import hackathon from "../assets/hackaton.png";

const NewsDetail = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24">
      <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
        <div>
          <div className="text-center">
            <h2 className="md:text-7xl text-4xl font-bold text-white my-8 leading-relaxed">
              CLOUDCAMP Ramadhan Hackathon 2024
            </h2>
          </div>
          <div className="flex justify-center">
            <img src={hackathon} alt="banner" className="w-[90%]" />
          </div>
          <div className="text-center">
            <p className="text-black text-2xl my-8">
              Develop web semalaman full di CloudCamp Hackathon Ramadhan 2024.
              Banyak keseruan di event Hackathon, develop Landing Page untuk
              mitra UMKM yang keren keren.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;

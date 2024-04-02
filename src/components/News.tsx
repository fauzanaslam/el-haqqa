import hackathon from "../assets/hackaton.png";

const News = () => {
  return (
    <div className="my-10 md:px-14 px-4 max-w-screen-2xl mx-auto">
      <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 item-start md:gap-12 gap-8">
        <a href="/detail">
          <div className="bg-[rgba(255, 255, 255, 0.04)] md:flex items-center justify-between hover:-translate-y-4 transition-all duration-300 cursor-pointer gap-3">
            <div>
              <img
                src={hackathon}
                alt="terupdate"
                className="rounded justify-center"
              />
            </div>
            <div className="h-[100%]">
              <h5 className="text-2xl font-semibold text-primary mt-5 hover:text-gray-300">
                CLOUDCAMP Ramadhan Hackathon 2024
              </h5>
              <div className="flex gap-5">
                <p className="text-red">penulis</p>
                <p className="text-yellow">diterbitkan</p>
              </div>
            </div>
          </div>
        </a>
        <a href="/detail">
          <div className="bg-[rgba(255, 255, 255, 0.04)] md:flex items-center justify-between hover:-translate-y-4 transition-all duration-300 cursor-pointer gap-3">
            <div>
              <img
                src={hackathon}
                alt="terupdate"
                className="rounded justify-center"
              />
            </div>
            <div className="h-[100%]">
              <h5 className="text-2xl font-semibold text-primary mt-5 hover:text-gray-300">
                CLOUDCAMP Ramadhan Hackathon 2024
              </h5>
              <div className="flex gap-5">
                <p className="text-red">penulis</p>
                <p className="text-yellow">diterbitkan</p>
              </div>
            </div>
          </div>
        </a>
        <a href="/detail">
          <div className="bg-[rgba(255, 255, 255, 0.04)] md:flex items-center justify-between hover:-translate-y-4 transition-all duration-300 cursor-pointer gap-3">
            <div>
              <img
                src={hackathon}
                alt="terupdate"
                className="rounded justify-center"
              />
            </div>
            <div className="h-[100%]">
              <h5 className="text-2xl font-semibold text-primary mt-5 hover:text-gray-300">
                CLOUDCAMP Ramadhan Hackathon 2024
              </h5>
              <div className="flex gap-5">
                <p className="text-red">penulis</p>
                <p className="text-yellow">diterbitkan</p>
              </div>
            </div>
          </div>
        </a>
        <a href="/detail">
          <div className="bg-[rgba(255, 255, 255, 0.04)] md:flex items-center justify-between hover:-translate-y-4 transition-all duration-300 cursor-pointer gap-3">
            <div>
              <img
                src={hackathon}
                alt="terupdate"
                className="rounded justify-center"
              />
            </div>
            <div className="h-[100%]">
              <h5 className="text-2xl font-semibold text-primary mt-5 hover:text-gray-300">
                CLOUDCAMP Ramadhan Hackathon 2024
              </h5>
              <div className="flex gap-5">
                <p className="text-red">penulis</p>
                <p className="text-yellow">diterbitkan</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default News;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    title: "CLOUDCAMP Ramadhan Hackathon 2024",
    description:
      "Develop web semalaman full di CloudCamp Hackathon Ramadhan 2024. Banyak keseruan di event Hackathon, develop Landing Page untuk mitra UMKM yang keren keren.",
    icon: "/src/assets/about.png",
  },
  {
    title: "Buka puasa bersama Flashsoft indonesia 2024",
    description:
      "Buka puasa bersama Ramadhan 1445 Hijriah. Tim, Mentor, Member, Volunteer dan Alumni Flashsoft Indonesia",
    icon: "/src/assets/expert.png",
  },
  {
    title: "Study Club Programming UNRI",
    description:
      "Dinas Pengembangan Potensi Akademik (PPA) HIMALKOM FMIPA UNRI bekerja sama dengan Flashsoft Indonesia dalam penyelenggaraan kegiatan Study Club Programming. ",
    icon: "/src/assets/expert2.png",
  },
];

const Article = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="article">
      <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                <div>
                  <img
                    src={item.icon}
                    alt={item.description}
                    className="lg-h-[386px]"
                  />
                </div>
                <div className="md:w-3/5">
                  <h2 className="md:text-2xl text-4xl font-bold text-white mb-6 leading-relaxed">
                    {item.title}
                  </h2>
                  <p className="text-black text-2xl mb-8">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Article;

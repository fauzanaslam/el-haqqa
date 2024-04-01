import Article2 from "./Article2";

const items = [
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, minima.",
    icon: "/src/assets/aboutImg.png",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, minima.",
    icon: "/src/assets/about.png",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, minima.",
    icon: "/src/assets/aboutImg2.png",
  },
];

const ArticleItem = () => {
  return (
    <div className="md:px-12 p-4 max-w-lg mx-auto mt-24" id="#">
      <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
        <Article2>
          {items.map((item) => (
            <>
              <img src={item.icon} alt="" />
            </>
          ))}
        </Article2>
      </div>
    </div>
  );
};

export default ArticleItem;

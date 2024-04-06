import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = ({
  // banner,
  heading,
  subheading,
  btn1,
}: {
  // banner: string;
  heading: string;
  subheading: string;
  btn1: string;
}) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="md:w-3/5"
    >
      <h2 className="md:text-7xl text-2xl font-bold text-white mb-6 leading-relaxed">
        {heading}
      </h2>
      <p className="text-black md:text-2xl mb-8">{subheading}</p>
      <a
        href="https://api.whatsapp.com/send?phone=6285363834829&text=hallo, saya ingin menanyakan paket yang tersedia"
        className="btnPrimary inline-block mb-6"
      >
        {btn1}
      </a>
    </motion.div>
  );
};

export default Banner;

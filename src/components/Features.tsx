import updateImg from "../assets/success.png";
import priceImg from "../assets/homerun.png";
import fleksibleImg from "../assets/snow.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Features = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="feature">
      <div className="flex flex-col lg:flex-row justify-between item-start gap-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="lg:w-1/2"
        >
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
            Achievement, Sholeh, Intelect, Character - ASIC
          </h3>
          <p className="text-base text-slate-800">
            Melahirkan generasi yang sholeh, cerdas, berprestasi, dan
            berkarakter
          </p>
        </motion.div>
        <div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 item-start md:gap-12 gap-8">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center justify-center"
            >
              <img src={updateImg} alt="terupdate" />
              <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                Melahirkan generasi yang berprestasi
              </h5>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center justify-center md:mt-16"
            >
              <img src={priceImg} alt="terjangkau" />
              <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                Melahirkan generasi yang cerdas
              </h5>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center justify-center"
            >
              <img src={fleksibleImg} alt="fleksible" />
              <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                Melahirkan generasi yang sholeh
              </h5>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

import featureImg from "../assets/feature.png";
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
          className="lg:w-1/4"
        >
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
            Lorem ipsum dolor sit amet.
          </h3>
          <p className="text-base text-tartiary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam, consequatur modi nam recusandae accusantium aperiam ex a
            velit praesentium animi!
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full lg:w-3/4"
        >
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 item-start md:gap-12 gap-8">
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center justify-center hover:-translate-y-4 transition-all duration- 300 cursor-pointer">
              <img src={featureImg} alt="" />
              <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                Lorem ipsum dolor sit amet.
              </h5>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center justify-center hover:-translate-y-4 transition-all duration- 300 cursor-pointer md:mt-16">
              <img src={featureImg} alt="" />
              <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                Lorem ipsum dolor sit amet.
              </h5>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center justify-center hover:-translate-y-4 transition-all duration- 300 cursor-pointer">
              <img src={featureImg} alt="" />
              <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                Lorem ipsum dolor sit amet.
              </h5>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;

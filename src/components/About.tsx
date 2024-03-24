import aboutImg from "../assets/aboutImg.png";
import aboutImg2 from "../assets/aboutImg2.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img src={aboutImg} alt="" />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-2/5"
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, error{" "}
            <span className="text-secondary">lorem ipsum</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            tempora dolores temporibus repudiandae provident non praesentium
            magni beatae eum consectetur?
          </p>
          <button className="btnPrimary">Get Started</button>
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img src={aboutImg2} alt="" />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-2/5"
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, error{" "}
            <span className="text-secondary">lorem ipsum</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            tempora dolores temporibus repudiandae provident non praesentium
            magni beatae eum consectetur?
          </p>
          <button className="btnPrimary">Get Started</button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

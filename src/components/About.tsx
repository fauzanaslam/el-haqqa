import aboutImg from "../assets/read.png";
import aboutImg2 from "../assets/read2.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div className="md:px-12 p-4 max-w-s mx-auto mt-24" id="about">
      <div className="md:p-9 px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
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
              ADAB, AKHLAK DAN KARAKTER.
              {/* <span className="text-yellow"> standar industri global</span> */}
            </h2>
            <p className="text-slate-800 text-lg mb-7">
              El Haqqa merupakan sekolah yang memprioritaskan adab, akhlak dan
              karakter peserta didik.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=6285363834829&text=hallo, saya ingin menanyakan paket yang tersedia"
              className="btnPrimary"
            >
              Hubungi Kami
            </a>
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
              IBADAH DAN BACA ALQURAN.
              {/* <span className="text-yellow"> Profesional</span> */}
            </h2>
            <p className="text-slate-800 text-lg mb-7">
              El Haqqa merupakan sekolah yang fokus melatih dan mengontrol
              ibadah peserta didik. Membiasakan peserta didik untuk membaca dan
              menghafalkan alqur’an dengan kaidah bacaan yang tepat.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=6285363834829&text=hallo, saya ingin menanyakan paket yang tersedia"
              className="btnPrimary"
            >
              Hubungi Kami
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

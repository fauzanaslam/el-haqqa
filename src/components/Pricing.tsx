import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "Coolyeah",
      monthlyPrice: "340.000",
      yearlyPrice: "1.232.000",
      description: "PHP / Java / C / Andriod / Python / JavaScript",
      yellow: "/src/assets/yellowDot.png",
    },
    {
      name: "Private",
      monthlyPrice: "1.150.000",
      yearlyPrice: "2.950.000",
      description: "PHP / Java / C / Andriod / Python / JavaScript",
      green: "/src/assets/rec1.png",
      yellow: "/src/assets/yellowDot.png",
    },
    {
      name: "Live Coding",
      monthlyPrice: "1.550.000",
      yearlyPrice: "2.950.000",
      description: "PHP / Java / C / Andriod / Python / JavaScript",
      yellow: "/src/assets/yellowDot.png",
    },
  ];

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
          Beberapa kelas yang dapat kamu pilih
        </h2>
        <p className="text-tartiary md:w-1/3 mx-auto px-4">
          kamu bebas memilih kelas yang ingin kamu ikuti
        </p>
        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl font-semibold">Bulanan</span>
            <div className="relative w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
              <div
                className={`absolute left-0 w-7 h-7 rounded-full transition duration-200 ease-in-out ${
                  isYearly
                    ? "transform translate-x-full bg-primary"
                    : "bg-gray-500"
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold">Complete</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto"
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl"
          >
            <h3 className="text-3xl font-bold text-center text-primary">
              {pkg.name}
            </h3>
            <p className="text-tartiary text-center my-5">{pkg.description}</p>
            <p className="mt-5 text-center text-red text-2xl font-bold">
              {isYearly ? `Rp.${pkg.yearlyPrice}` : `Rp.${pkg.monthlyPrice}`}
              <span className="text-base text-tartiary font-medium">
                /{isYearly ? "3 bulan" : "bulan"}
              </span>
            </p>
            <ul className="mt-4 space-y-2 px-4">
              <li className="flex gap-3 items-center">
                <img src={pkg.yellow} alt="" className="w-4 h-4" />
                durasi 120 menit
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.yellow} alt="" className="w-4 h-4" />
                Reguler Senin - Jumat
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.yellow} alt="" className="w-4 h-4" />
                Reguler Pagi/Siang
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.yellow} alt="" className="w-4 h-4" />
                Tersedia Non-Reguler
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.yellow} alt="" className="w-4 h-4" />
                Free Konsultasi
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.yellow} alt="" className="w-4 h-4" />
                Free Komunitas
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.yellow} alt="" className="w-4 h-4" />
                Mentor Berpengalaman
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.yellow} alt="" className="w-4 h-4" />
                Private Full Belajar
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.yellow} alt="" className="w-4 h-4" />
                Instan dan Belajar
              </li>
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="btnPrimary">Get Started</button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pricing;

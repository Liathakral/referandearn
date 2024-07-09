"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import step1 from "../../../public/step1.png";
import step2 from "../../../public/step2.png";
import step3 from "../../../public/step3.png";

const How = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 5000); // 10000 milliseconds = 10 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div key={key} className="  ">
      <section className="w-auto  py-64">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-500 ">
          How to Use the Refer & Earn App
        </h2>
        <div className="flex  font-mono text-stone-800 flex-col space-x-24 lg:flex-row justify-center items-center gap-8">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src={step1}
              alt="Step 1"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 object-contain mb-4"
            />
            <p className=" text-lg sm:text-xl md:text-2xl text-center">
              {" "}
              Register
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src={step2}
              alt="Step 3"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 object-contain mb-4"
            />
            <p className="text-lg sm:text-xl md:text-2xl text-center">
              {" "}
              Share Your Referral Code
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Image
              src={step3}
              alt="Step 3"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 object-contain mb-4"
            />
            <p className="text-lg sm:text-xl md:text-2xl text-center">
              {" "}
              Earn Rewards
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default How;

"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

import How from "./components/how";
import hroimg from "../../public/download (1).png";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [key, setKey] = useState(0);

  const handleReferEarnClick = () => {
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/refer&earn");
    } else {
      router.push("/signup");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-slate-200 flex h-screen sm:h-auto flex-col pt-24">
      <motion.section
        key={key}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full h-screen flex flex-col lg:flex-row items-center justify-center px-4"
      >
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
          <Image
            src={hroimg}
            alt="Hero"
            className="w-full h-auto lg:h-full rounded-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center text-center lg:text-left lg:pl-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4"
          >
            Welcome to Our Platform
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-black mb-8"
          >
            Join us and start earning rewards by referring your friends!
          </motion.p>
          <motion.button
            onClick={handleReferEarnClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded text-base sm:text-lg md:text-xl mt-4 lg:mt-0"
          >
            Refer & Earn
          </motion.button>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-full  bg-gray-300  mt-9 rounded-3xl"
      >
        <How />
      </motion.section>
      <Footer />
    </main>
  );
}

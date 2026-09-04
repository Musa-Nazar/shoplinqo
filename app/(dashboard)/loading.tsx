"use client";
import { motion } from "framer-motion";
const loading: React.FC = () => {
  const xml: React.ReactNode = (
    <main className="h-dvh pt-40">
      <motion.div
        className="w-40 aspect-square mx-auto border-4 border-solid border-(--app-btn-blue) border-t-transparent rounded-[50%]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
      ></motion.div>
    </main>
  );
  return xml;
};

export default loading;

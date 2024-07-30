"use client";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import ArrowRight from "@/assets/arrow-right.svg";
import logoSaaSImage from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  const arrowControls = useAnimation();

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-2 bg-black text-white text-sm gap-2">
        <p className="text-white/80 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <Link href="#">
          <motion.div
            className="inline-flex gap-1 items-center cursor-pointer"
            onHoverStart={() => arrowControls.start({ x: 5 })}
            onHoverEnd={() => arrowControls.start({ x: 0 })}
          >
            <p>Get Started Free</p>
            <motion.div animate={arrowControls} transition={{ duration: 0.2 }}>
              <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
            </motion.div>
          </motion.div>
        </Link>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="inline-flex relative before:content-[''] before:opacity-40 before:h-full before:w-full before:bg-[linear-gradient(to_right,#FF00FF,#FF00FF,#FFFFFF,#00FFFF,#00FFFF,#FFFFFF,#00FFFF,#00FFFF,#00FFFF,#FFFFFF,#FFD700,#FFFFFF)] before:absolute before:blur-md">
              <Image
                src={logoSaaSImage}
                alt="Footer Logo"
                height={40}
                className="relative"
              />
            </div>
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cyclinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className=" md:flex items-center">
          <div className="md:w-[478px]">
            <div className="pill">Version 2.0 is here</div>
            <h1 className="h1-style">Pathway to productivity</h1>
            <p className="paragraph">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="mt-6 flex gap-4 items-center">
              <button className="btn btn-primary">Get for free</button>
              <motion.button
                className="btn btn-text gap-1"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <span>Learn more</span>
                <motion.div
                  key={"arrow"}
                  initial={{ x: 0 }}
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-5 w-5 pt-0.5" />
                </motion.div>
              </motion.button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-5, 5],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cyclinderImage.src}
              alt="Cylinder image"
              className="hidden md:block -top-8 -left-32 lg:-left-20 md:absolute"
              width={220}
              height={220}
              initial={{ y: 0 }}
              style={{
                translateY: shouldAnimate ? translateY : 0,
              }}
            />
            <motion.img
              src={noodleImage.src}
              alt="Noodle image"
              className="hidden lg:block top-[524px] left-[448px] md:absolute"
              width={220}
              height={220}
              initial={{ y: 0, rotate: 30 }}
              style={{
                translateY: shouldAnimate ? translateY : 0,
                rotate: 30,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

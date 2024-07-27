"use client";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ProductShowcase = () => {
  const productRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // For rotateX animation
  const { scrollYProgress: scrollYProgressRotate } = useScroll({
    target: productRef,
    offset: ["start end", "start start"],
  });

  // For translateY animation
  const { scrollYProgress: scrollYProgressTranslate } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(
    scrollYProgressTranslate,
    [0, 1],
    [300, -300]
  );
  const rotateX = useTransform(scrollYProgressRotate, [0, 1], [90, 0]);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <section
      ref={productRef}
      className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="centered-content-container">
          <div className="pill">Boost your productivity</div>
          <h2 className="h2-style">A more effective way to track progress</h2>
          <p className="paragraph text-center">
            Effortlessly turn your ideas into a fully functional, responsive
            SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <motion.img
            src={productImage.src}
            className="pt-10"
            alt={"Image of the product"}
            initial={{ rotateX: 90 }}
            style={{
              rotateX: shouldAnimate ? rotateX : 90,
            }}
          />
          <motion.img
            src={pyramidImage.src}
            className="hidden md:block absolute -top-24 -right-32"
            alt={"Pyramid Image"}
            width={262}
            height={262}
            initial={{ y: 300 }}
            style={{
              y: shouldAnimate ? translateY : 300,
            }}
          />
          <motion.img
            src={tubeImage.src}
            className="hidden md:block absolute bottom-8 lg:bottom-24 -left-36 lg:-left-40"
            alt={"Tube Image"}
            width={262}
            height={262}
            initial={{ y: 300 }}
            style={{
              y: shouldAnimate ? translateY : 300,
            }}
          />
        </div>
      </div>
    </section>
  );
};

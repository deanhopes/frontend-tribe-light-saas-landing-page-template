import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container flex flex-col items-center">
        <div className="flex flex-col items-center md:max-w-[540px]">
          <div className="pill">
            Boost your productivity
          </div>
          <h2 className="h2-style">
            A more effective way to track progress
          </h2>
          <p className="paragraph text-center">
            Effortlessly turn your ideas into a fully functional, responsive
            SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image
            src={productImage}
            className="pt-10"
            alt={"Image of the product"}
          ></Image>
          <Image
            src={pyramidImage}
            className="hidden md:block absolute -top-24 -right-32"
            alt={"Pyramid Image"}
            width={262}
            height={262}
          ></Image>
          <Image
            src={tubeImage}
            className="hidden md:block absolute bottom-8 lg:bottom-24 -left-36 lg:-left-40"
            alt={"Tube Image"}
            width={262}
            height={262}
          ></Image>
        </div>
      </div>
    </section>
  );
};

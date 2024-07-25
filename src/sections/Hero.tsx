import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cyclinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className=" md:flex items-center">
          <div className="md:w-[478px]">
            <div className="px-3 py-1 rounded-lg border border-[#222222]/10 inline-flex items-center justify-center font-medium text-sm">
              Version 2.0 is here
            </div>
            <h1 className="my-6 font-bold text-5xl md:text-7xl tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              Pathway to productivity
            </h1>
            <p className="text-xl tracking-tight text-[#010D3E]">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="mt-6 flex gap-1 items-center">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowRight className="h-5 w-5 pt-0.5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={cogImage}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={cyclinderImage}
              alt="Cylinder image"
              className="hidden md:block -top-8 -left-32 lg:-left-20 md:absolute"
              width={220}
              height={220}
            />
            <Image
              src={noodleImage}
              alt="Noodle image"
              className="hidden lg:block top-[524px] left-[448px] md:absolute rotate-[30deg]"
              width={220}
              height={220}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

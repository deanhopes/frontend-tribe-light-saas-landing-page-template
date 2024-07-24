import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]">
      <div className="container">
        <div>
          <div className="px-3 py-1 rounded-lg border border-[#222222]/10 inline-flex items-center justify-center font-medium text-sm">
            Version 2.0 is here
          </div>
          <h1 className="my-6 font-bold text-5xl tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Pathway to productivity
          </h1>
          <p className="text-xl tracking-tight text-[#010D3E]">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <div className="mt-6 flex gap-1 items-center">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1">
              <span>Learn more</span>
              <ArrowRight className="h-5 w-5 pt-0.5" />
            </button>
          </div>
        </div>
        <div className="mt-20">
          <Image src={cogImage} alt="Cog image" />
        </div>
      </div>
    </section>
  );
};

import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="centered-content-container">
          <h2 className="h2-style">Sign up for free today</h2>
          <p className="paragraph text-center">
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
        <div className="relative">
          <Image
            src={starImage}
            alt="Star image"
            className="hidden md:block md:absolute -left-[280px] lg:-left-40 -top-80 lg:-top-96"
            width={360}
            height={360}
          />
          <Image
            src={springImage}
            alt="Spring image"
            className="hidden md:block md:absolute -right-[200px] lg:right-[-150px] -top-52 lg:-top-40"
            width={360}
            height={360}
          />
        </div>
      </div>
    </section>
  );
};

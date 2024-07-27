import XIcon from "@/assets/social-x.svg";
import InstaIcon from "@/assets/social-insta.svg";
import LinkedInIcon from "@/assets/social-linkedin.svg";
import PinterestIcon from "@/assets/social-pin.svg";
import YoutubeIcon from "@/assets/social-youtube.svg";
import logoSaaSImage from "@/assets/logosaas.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] py-10 text-sm">
      <div className="centered-content-container">
        <div className="flex flex-col items-center gap-y-6">
          <div className="inline-flex relative before:top-1 before:bottom-0 before:content-[''] before:h-full before:w-full before:bg-[linear-gradient(to_right,#FF00FF,#FF00FF,#FFFFFF,#00FFFF,#00FFFF,#FFFFFF,#00FFFF,#00FFFF,#00FFFF,#FFFFFF,#FFD700,#FFFFFF)] before:absolute before:blur">
            <Image
              src={logoSaaSImage}
              alt="Footer Logo"
              height={40}
              className="relative"
            />
          </div>
          <nav className="flex flex-col items-center md:flex-row gap-4">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Pricing</a>
            <a href="#">Help</a>
            <a href="#">Careers</a>
          </nav>
        </div>
        <div className="flex gap-4 py-6">
          <XIcon />
          <InstaIcon />
          <LinkedInIcon />
          <PinterestIcon />
          <YoutubeIcon />
        </div>
        <p className="text-center text-pretty">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

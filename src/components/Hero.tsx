import Image from "next/image";
import { IconArrowRight, ImageHero } from "../assets";

const Hero = () => {
  return (
    <div className={`mx-auto max-w-[1200px] pt-24`}>
      <div className={`grid grid-cols-2 py-52`}>
        <div>
          <h1 className={`heading mb-4`}>
            <span className={`text-brand`}>Saling</span> bantu 👋 sesama{" "}
            <span className={`text-brand`}>Warga</span>
          </h1>
          <p className={`text mb-8`}>
            Aplikasi Bantu warga merupakan aplikasi berbasis mobile dengan
            konsep kesehatan yang berkaitan dengan keadaan covid sekarang
          </p>
          <div
            className={`flex w-[400px] items-center justify-between rounded-[10px] bg-white py-2.5 pl-6 pr-4 drop-shadow-md`}
          >
            <span className={`text`}>Email address ...</span>
            <button className={`rounded-[10px] bg-brand p-3 text-white`}>
              <IconArrowRight />
            </button>
          </div>
        </div>
        <div className="relative">
          <div className={`absolute -top-[200px] -right-[200px] w-[800px]`}>
            <Image
              src={ImageHero}
              alt={`image-hero`}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

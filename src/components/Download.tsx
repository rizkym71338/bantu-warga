import Image from "next/image";
import { AppStore, GetApp, GooglePlay } from "../assets";

const Download = () => {
  return (
    <div className={`mx-auto grid max-w-[1200px] grid-cols-2 gap-6 py-14`}>
      <div className={`relative aspect-square h-[612px]`}>
        <Image
          src={GetApp}
          alt={`get-app`}
          style={{ objectFit: "contain" }}
          fill
        />
      </div>
      <div className={`flex flex-col justify-center`}>
        <span
          className={`border-l-[3px] border-brand pl-4 text-base font-semibold text-brand`}
        >
          Download Now
        </span>
        <h1 className={`heading mb-4`}>
          Get <span className={`text-brand`}>the app</span>
        </h1>
        <p className={`text`}>
          Aplikasi kami tersedia di play store , app store , anda dapat langsung
          mendownloadnya secara gratis dan nikmati fitur aplikasi yang sudah
          kami sediakan
        </p>
        <div className={`flex items-center space-x-6`}>
          <div className={`relative aspect-video w-[200px]`}>
            <Image
              src={GooglePlay}
              alt={`googleplay`}
              style={{ objectFit: "contain" }}
              fill
            />
          </div>
          <div className={`relative aspect-video w-[200px]`}>
            <Image
              src={AppStore}
              alt={`appstore`}
              style={{ objectFit: "contain" }}
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;

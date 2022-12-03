import Image from "next/image";
import { Demo } from "../assets";
import CovidInformation from "../constants/CovidInformation";
import { ButtonNavbar } from "./buttons";

const Information = () => {
  return (
    <div className={`mx-auto grid max-w-[1200px] grid-cols-2 gap-6 py-14`}>
      <div>
        <span
          className={`mb-4 border-l-[3px] border-brand pl-4 text-base font-semibold text-brand`}
        >
          Information
        </span>
        <h1 className={`heading mb-8`}>Covid information</h1>
        <div className={`mb-16 space-y-[43px]`}>
          {CovidInformation.map((info, i) => (
            <div key={i} className={`flex space-x-8 text-brand`}>
              {info.icon}
              <div className={`space-y-4`}>
                <h2 className={`sub-heading`}>{info.title}</h2>
                <p className={`text`}>{info.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`ml-16`}>
          <ButtonNavbar text={`See demo`} />
        </div>
      </div>
      <div className={`relative aspect-square h-[575px]`}>
        <Image src={Demo} alt={`demo`} style={{ objectFit: "contain" }} fill />
      </div>
    </div>
  );
};

export default Information;

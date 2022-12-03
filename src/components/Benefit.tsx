import BenefitItem from "../constants/BenefitItem";
import { ButtonLoadMore } from "./buttons";
import { CardBenefit } from "./cards";

const Benefit = () => {
  return (
    <div className={`mx-auto flex max-w-[1200px] flex-col items-center py-14`}>
      <h1 className={`heading mb-4 text-center`}>
        What's <span className={`text-brand`}>Bantu Warga</span>
      </h1>
      <p className={`text mx-auto mb-16 w-[543px] text-center`}>
        Aplikasi Bantu warga disini anda bisa melihat keadaan pandemi covid di
        Indonesia dari penyebaran covid , berita , data{" "}
      </p>
      <div className={`mb-8 grid grid-cols-3 gap-4`}>
        {BenefitItem.map((benefit, i) => (
          <CardBenefit
            key={i}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
          />
        ))}
      </div>
      <ButtonLoadMore text={`load more`} />
    </div>
  );
};

export default Benefit;

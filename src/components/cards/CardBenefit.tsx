import Image from "next/image";

interface Props {
  title: string;
  description: string;
  icon: any;
}

const CardBenefit = ({ title, description, icon }: Props) => {
  return (
    <div
      className={`flex flex-col space-y-4 rounded-[10px] border border-[#F3F1F1] bg-white px-7 pt-[38px] pb-[51px] text-center`}
    >
      <div className={`relative aspect-video h-11`}>
        <Image src={icon} alt={`title`} style={{ objectFit: "contain" }} fill />
      </div>
      <h2 className={`sub-heading`}>{title}</h2>
      <p className={`text`}>{description}</p>
    </div>
  );
};

export default CardBenefit;

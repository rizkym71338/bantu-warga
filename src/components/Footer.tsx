import Image from "next/image";
import Link from "next/link";
import { IconFacebook, IconInstagram, IconTwitter, Logo2 } from "../assets";
import { FooterItem } from "../constants";

const Footer = () => {
  return (
    <div className={`w-full bg-brand`}>
      <div
        className={`mx-auto flex max-w-[1200px] flex-col space-y-24 pt-24 pb-11`}
      >
        <div className={`flex justify-between`}>
          <div className={`space-y-[34px]`}>
            <div className={`relative aspect-video w-[136px]`}>
              <Image
                src={Logo2}
                alt={`logo-2-bantu-warga`}
                style={{ objectFit: "contain" }}
                fill
              />
            </div>
            <p className={`text w-[398px] text-white`}>
              Kami adalah aplikasi pelayanan masyarakat dalam kasus kesehatan
              terutama covid 19
            </p>
          </div>
          <div className={`flex space-x-[70px]`}>
            {FooterItem.map((item, i) => (
              <div key={i} className={`flex flex-col space-y-5`}>
                <span className={`sub-heading text-white`}>{item.title}</span>
                {item.list.map((list, i) => (
                  <Link key={i} href={`/`} className={`text text-white`}>
                    {list.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={`flex items-end justify-between`}>
          <div className={`flex items-center space-x-12 text-white`}>
            <IconFacebook className={`cursor-pointer`} />
            <IconTwitter className={`cursor-pointer`} />
            <IconInstagram className={`cursor-pointer`} />
          </div>
          <p className={`text text-white`}>
            copyright BantuWarga. All right reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "../assets";
import { NavbarItem } from "../constants";
import { ButtonNavbar } from "./buttons";

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <div className={`fixed top-0 z-40 w-full bg-white drop-shadow`}>
      <div
        className={`mx-auto flex max-w-[1200px] items-center justify-between py-[15px]`}
      >
        {/* Logo brand */}
        <Link href={`/`} className={`relative aspect-video w-28`}>
          <Image
            src={Logo}
            alt={`logo-bantu-warga`}
            style={{ objectFit: "contain" }}
            fill
          />
        </Link>

        {/* Navbar Item */}
        <ul className={`flex items-center space-x-[69px]`}>
          {NavbarItem.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className={` ${
                  pathname === item.href
                    ? "font-semibold text-brand"
                    : "font-medium text-[#656161]"
                } text-base tracking-[5%] transition-all hover:text-brand`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Button  */}
        <ButtonNavbar text={`See demo`} />
      </div>
    </div>
  );
};

export default Navbar;

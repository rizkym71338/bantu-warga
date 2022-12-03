interface ButtonNavbar {
  text: string;
}

const ButtonNavbar = ({ text }: ButtonNavbar) => {
  return (
    <button
      className={`rounded-[10px] bg-brand py-3 px-7 text-base font-semibold tracking-[2%] text-white`}
    >
      {text}
    </button>
  );
};

export default ButtonNavbar;

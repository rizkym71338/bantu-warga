interface Props {
  text: string;
  className?: string;
}

const ButtonLoadMore = ({ text, className }: Props) => {
  return (
    <button
      className={`${className} rounded-[10px] bg-brand py-[10px] px-7 text-base font-semibold text-white`}
    >
      {text}
    </button>
  );
};

export default ButtonLoadMore;

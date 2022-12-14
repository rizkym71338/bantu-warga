interface IconArrowRight {
  className?: string;
}
const IconArrowRight = (props: IconArrowRight) => {
  return (
    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" {...props}>
      <path
        d="M17.0769 12.8462C18.9468 10.8212 22.7471 6.80158 22.9897 6.92308C23.2322 7.04457 19.1489 3.02498 17.0769 0.999997"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 6.92307L0.999996 6.92307"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconArrowRight;

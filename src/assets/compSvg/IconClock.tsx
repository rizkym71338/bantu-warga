interface Props {
  className?: string;
}

const IconClock = (props: Props) => {
  return (
    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" {...props}>
      <g clip-path="url(#clip0_16_393)">
        <path
          d="M18.5 0C8.29926 0 0 8.29926 0 18.5C0 28.7007 8.29926 37 18.5 37C28.7007 37 37 28.7007 37 18.5C37 8.29926 28.7007 0 18.5 0ZM21.7711 25.0411L16.1875 19.4575V9.24998H20.8125V17.5425L25.0412 21.7711L21.7711 25.0411Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_16_393">
          <rect width="37" height="37" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconClock;

type Props = {
  onClick: () => void;
};

export default function Hamburger({ onClick }: Props) {
  return (
    <svg
      width="16"
      height="15"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className="z-50 cursor-pointer sm:mr-[42px] tab:hidden group"
    >
      <g
        fill="#FFF"
        fillRule="evenodd"
        className="transition-colors group-hover:fill-orange"
      >
        <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
      </g>
    </svg>
  );
}

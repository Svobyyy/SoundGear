type Props = {
  showSwitch: boolean;
  isMenu?: boolean;
  isCheckout?: boolean;
};

const showOverlay = (switcher: boolean) => {
  return switcher ? "opacity-40 visible" : "opacity-0 invisible";
};

export default function BackgroundOverlay({
  showSwitch,
  isMenu,
  isCheckout,
}: Props) {
  return (
    <div
      className={`min-w-screen fixed bottom-0 left-0 right-0 top-0 ${isMenu ? "z-[10] tab:hidden" : isCheckout ? "z-[40]" : "z-30"} inline-block min-h-screen bg-black ${showOverlay(showSwitch)} transition-all`}
    />
  );
}

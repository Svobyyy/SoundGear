type Props = {
  showSwitch: boolean;
  isMenu?: boolean;
};

const showOverlay = (switcher: boolean) => {
  return switcher ? "opacity-40 visible" : "opacity-0 invisible";
};

export default function BackgroundOverlay({ showSwitch, isMenu }: Props) {
  return (
    <div
      className={`min-w-screen fixed bottom-0 left-0 right-0 top-0 ${isMenu ? "z-[10] tab:hidden" : "z-[30]"} inline-block min-h-screen bg-black ${showOverlay(showSwitch)} transition-all`}
    />
  );
}

type Props = {
  showSwitch: boolean;
  isMenu?: boolean;
};

const showOverlay = (switcher: boolean) => {
  return switcher ? "z-[1] opacity-40 visible" : "opacity-0 invisible";
};

export default function BackgroundOverlay({ showSwitch, isMenu }: Props) {
  return (
    <div
      className={`min-w-screen fixed bottom-0 left-0 right-0 top-0 inline-block min-h-screen bg-black ${isMenu && "tab:hidden"} ${showOverlay(showSwitch)} transition-all`}
    />
  );
}

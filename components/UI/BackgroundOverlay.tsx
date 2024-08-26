type Props = {
  showSwitch: boolean;
};

const showOverlay = (switcher: boolean) => {
  return switcher ? "z-10 opacity-40" : "-z-10 opacity-0";
};

export default function BackgroundOverlay({ showSwitch }: Props) {
  return (
    <div
      className={`min-w-screen fixed bottom-0 left-0 right-0 top-0 inline-block min-h-screen bg-black tab:hidden ${showOverlay(showSwitch)} transition-opacity`}
    />
  );
}

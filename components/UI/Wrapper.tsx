// Wrapper for a higher resolutions of the screen

export default function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-between">
      {children}
    </section>
  );
}

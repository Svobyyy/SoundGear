type Props = {
  categorySlug: string;
};

export default function CategoryTitle({ categorySlug }: Props) {
  return (
    <h2 className="bg-black py-8 text-center text-white sm:py-[98px]">
      {categorySlug}
    </h2>
  );
}

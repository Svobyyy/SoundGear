import Button from "@/components/UI/Button";

type Props = {
  name: string;
  description?: string;
  category: string;
  slug: string;
};

const assignBoxStyle = (primaryBox: string | undefined) => {
  return primaryBox
    ? "paddings mb-[55px] items-center justify-center text-center text-white mob:p-0 sm:mb-[64px] lg:mb-0 lg:mr-[95px] lg:items-start lg:text-left"
    : "mainmob:ml-[60px] ml-[25px] lg:ml-[95px]";
};

export default function InfoBoxes({
  name,
  description,
  category,
  slug,
}: Props) {
  return (
    <div
      className={`z-[2] max-w-[349px] ${assignBoxStyle(description)} flex flex-col`}
    >
      {name && description ? (
        <h1 className="max-w-[200px] sm:max-w-none">{name}</h1>
      ) : (
        <h4 className="mb-8">{name}</h4>
      )}
      {description && <p className="mb-6 mt-6 sm:mb-10">{description}</p>}
      {category && slug && (
        <Button
          text="SEE PRODUCT"
          navigateTo={`${category}/${slug}`}
          maxWidth
          black
          trans={description ? false : true}
        />
      )}
    </div>
  );
}

import Button from "../../UI/Button";
import Pattern from "../../icons/Pattern";
import ImageBoxes from "./ImageBoxes";

type Props = {
  smallBoxes?: boolean;
};

const assignBoxHeight = (
  exists: string | undefined,
  smallBoxes: boolean | undefined,
) => {
  return exists
    ? "h-[600px] sm:h-[720px] lg:h-[560px] items-end justify-center lg:items-center lg:justify-end"
    : `${!smallBoxes ? "h-[320px]" : "h-[200px] tab:flex-1 tab:h-[320px]"}`;
};

export default function ProductBoxes({
  info: { name, description, image, slug, category },
  smallBoxes,
}: homeProduct & Props) {
  return (
    <section
      className={`${assignBoxHeight(description, smallBoxes)} relative flex overflow-hidden bg-orange ${!description && "items-center justify-start"} rounded-lg`}
    >
      {image && <ImageBoxes image={image} name={name} primary={description} />}
      {description && <Pattern />}

      <div
        className={`z-[2] max-w-[349px] ${description ? "paddings mb-[55px] items-center justify-center text-center text-white mob:p-0 sm:mb-[64px] lg:mb-0 lg:mr-[95px] lg:items-start lg:text-left" : `mainmob:ml-[60px] ml-[25px] lg:ml-[95px]`} flex flex-col`}
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
    </section>
  );
}

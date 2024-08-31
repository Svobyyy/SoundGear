import Button from "../../UI/Button";
import Pattern from "../../icons/Pattern";
import ImageBoxes from "./ImageBoxes";

const assignHeight = (exists: string | undefined) => {
  return exists ? "h-[600px] sm:h-[720px] lg:h-[560px]" : "h-[320px]";
};

export default function ProductBoxes({
  info: { name, description, image, slug, category },
}: homeProduct) {
  return (
    <div
      className={`${assignHeight(description)} relative flex overflow-hidden bg-orange ${description ? "items-end justify-center lg:items-center lg:justify-end" : "items-center justify-center"} flex-1 rounded-lg`}
    >
      {image && <ImageBoxes image={image} name={name} primary={description} />}
      {description && <Pattern />}

      <div
        className={`z-[2] max-w-[349px] lg:mr-[95px] ${description && "mb-[55px] text-center text-white sm:mb-[64px] lg:mb-0 lg:text-left"} paddings flex flex-col items-center justify-center`}
      >
        {name && description ? (
          <h1 className="max-w-[200px] sm:max-w-none">{name}</h1>
        ) : (
          <h4>{name}</h4>
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
    </div>
  );
}

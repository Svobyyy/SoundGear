import Pattern from "../../icons/Pattern";
import ImageBoxes from "./ImageBoxes";
import InfoBoxes from "./InfoBoxes";

type Props = {
  smallBoxes?: boolean;
};

const assignBoxStyle = (
  primaryBox: string | undefined,
  smallBoxes: boolean | undefined,
) => {
  return primaryBox
    ? "h-[600px] sm:h-[720px] lg:h-[560px] items-end justify-center lg:items-center lg:justify-end bg-orange"
    : `${!smallBoxes ? "h-[320px]" : "h-[200px] tab:flex-1 tab:h-[320px]"} items-center justify-start bg-gray`;
};

// only the primaryBox has a description, which changes the height of the box

export default function ProductBox({
  info: { name, description, image, slug, category },
  smallBoxes,
}: homeProduct & Props) {
  return (
    <section
      className={`${assignBoxStyle(description, smallBoxes)} relative flex overflow-hidden rounded-lg`}
    >
      {image && <ImageBoxes image={image} name={name} primary={description} />}
      {description && <Pattern />}
      {name && category && slug && (
        <InfoBoxes
          name={name}
          description={description}
          slug={slug}
          category={category}
        />
      )}
    </section>
  );
}

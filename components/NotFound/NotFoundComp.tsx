import Image from "next/image";
import Button from "../UI/Button";

export default function NotFoundComp() {
  return (
    <div className="margins paddings my-[120px] flex flex-col items-center justify-center gap-5 rounded-lg bg-gray py-10 text-center">
      <h4 className="leading-[60px]">
        Something Went wrong. <br />
        We&#39;re unable to load this page.
      </h4>
      <p></p>
      <Image
        src="/shared/desktop/error.png"
        alt="Not Found"
        quality={100}
        width={250}
        height={250}
      />
      <Button text="Back Home" navigateTo="/" maxWidth />
    </div>
  );
}

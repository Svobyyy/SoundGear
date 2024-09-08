import Image from "next/image";
import Link from "next/link";
import Button from "../UI/Button";

export default function NotFoundComp() {
  return (
    <div className="my-[120px] margins flex justify-center items-center flex-col gap-5 text-center bg-gray rounded-lg paddings py-10">
      <h4 className="leading-[60px]">
        Something Went wrong. <br />
        We're unable to load this page.
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

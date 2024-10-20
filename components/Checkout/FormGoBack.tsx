import Link from "next/link";

export default function FormGoBack() {
  return (
    <div className="flex w-full items-start justify-center">
      <div className="w-full max-w-[1100px]">
        <Link href={`/`} className="group mb-[24px] inline-block tab:mb-[38px]">
          <p className="opacity-75 transition-all group-hover:text-orange group-hover:opacity-100">
            Go Back
          </p>
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function FormGoBack() {
  return (
    <div className="flex w-full items-start justify-center">
      <div className="w-full max-w-[1100px]">
        <Link href={`/`} className="group inline-block">
          <p className="mb-[24px] opacity-50 transition-all group-hover:text-orange group-hover:opacity-100 tab:mb-[38px]">
            Go Back
          </p>
        </Link>
      </div>
    </div>
  );
}

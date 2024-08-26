import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Twitter from "../icons/Twitter";

type Props = {
  social: string;
};

export default function SocialLink({ social }: Props) {
  return (
    <li className="cursor-pointer">
      <a href={`https://www.${social}.com`} target="_blank">
        {social === "facebook" && <Facebook />}
        {social === "twitter" && <Twitter />}
        {social === "instagram" && <Instagram />}
      </a>
    </li>
  );
}

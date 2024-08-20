import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Twitter from "../icons/Twitter";

type props = {
  social: string;
};

export default function SocialLink({ social }: props) {
  return (
    <li className="cursor-pointer">
      <a href={"https://www.facebook.com/"} target="_blank">
        {social === "facebook" && <Facebook />}
        {social === "twitter" && <Twitter />}
        {social === "instagram" && <Instagram />}
      </a>
    </li>
  );
}

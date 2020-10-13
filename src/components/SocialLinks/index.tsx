import { IconType } from "react-icons/lib";
import { useHover } from "src/hooks";
import links from "./links";

interface SocialLinkItemProps {
  Icon: IconType;
  url: string;
}

const SocialLinkItem: React.FC<SocialLinkItemProps> = ({ Icon, url }) => {
  const [hoverRef, hover] = useHover();

  return (
    <a
      className={`cursor-pointer text-bold p-2 rounded-sm ${
        hover && "bg-yellow-primary"
      }`}
      href={url}
      target="_blank"
      ref={hoverRef}
    >
      <Icon size={30} />
    </a>
  );
};

const SocialLinks: React.FC = () => {
  return (
    <div className="flex gap-3">
      {links?.map((link, index) => (
        <SocialLinkItem key={index} Icon={link.Icon} url={link.url} />
      ))}
    </div>
  );
};

export default SocialLinks;

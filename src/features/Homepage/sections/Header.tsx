import { usePortfolio } from "../../../hooks/usePortfolio";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
interface HeaderProps {
  onScroll: (section: string) => void;
}

const Header = ({ onScroll }: HeaderProps) => {
  const { header } = usePortfolio();
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: header.socialLinks.github,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: header.socialLinks.linkedin,
    },
    {
      name: "Resume",
      icon: <FaFileDownload />,
      url: header.socialLinks.linkedin,
    },
  ];
  return (
    <div className="flex justify-between py-10">
      <div className="flex justify-center items-center gap-8">
        <p className="text-lg font-bold">{header.name}</p>
        <ul className="flex justify-center items-center gap-4 font-bold ">
          {header.navItems.map((item, index) => (
            <li
              key={index}
              className="text-sm hover:text-[#64ffda] transition-colors cursor-pointer"
              onClick={() => onScroll(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="flex justify-center items-center gap-4 font-bold ">
          {socialLinks.map((link, index) => (
            <li
              key={index}
              className="hover:text-[#64ffda] transition-colors cursor-pointer"
            >
              <a
                href={link.url}
                title={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

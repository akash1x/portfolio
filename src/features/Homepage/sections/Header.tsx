import { useState } from "react";
import { usePortfolio } from "../../../hooks/usePortfolio";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaBars,
  FaTimes,
} from "react-icons/fa";
interface HeaderProps {
  onScroll: (section: string) => void;
}

const Header = ({ onScroll }: HeaderProps) => {
  const { header, resume } = usePortfolio();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: header?.socialLinks?.github || "",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: header?.socialLinks?.linkedin || "",
    },
    {
      name: resume?.name || "resume",
      icon: <FaFileDownload />,
      url: resume?.url || "",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (section: string) => {
    setIsMenuOpen(false);
    onScroll(section);
  };

  return (
    <div className="relative py-6 md:py-10">
      <div className="flex justify-between items-center">
        {/* Logo/Name */}
        <p className="text-lg font-bold z-50 relative md:hidden">
          {header?.name}
        </p>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center gap-8">
          <p className="text-lg font-bold z-50 relative">{header?.name}</p>
          <ul className="flex  gap-4 font-bold">
            {header?.navItems?.map((item, index) => (
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

        {/* Desktop Social Links */}
        <div className="hidden md:block">
          <ul className="flex justify-center items-center gap-4 font-bold">
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

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-2xl hover:text-[#64ffda] transition-colors"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0a192f] flex flex-col justify-center items-center gap-8 transition-transform duration-300 md:hidden z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 text-xl font-bold">
          {header?.navItems?.map((item, index) => (
            <li
              key={index}
              className="hover:text-[#64ffda] transition-colors cursor-pointer"
              onClick={() => handleScroll(item)}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="w-10 h-1 bg-[#233554] rounded-full"></div>

        <ul className="flex justify-center items-center gap-8 text-2xl">
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

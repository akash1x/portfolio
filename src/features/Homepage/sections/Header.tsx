import { usePortfolio } from "../hooks/usePortfolio";

interface HeaderProps {
  onScroll: (section: string) => void;
}

const Header = ({ onScroll }: HeaderProps) => {
  const { header } = usePortfolio();

  return (
    <div className="flex justify-between py-10">
      <div className="flex justify-center items-center gap-4">
        <p className="text-2xl font-bold">{header.name}</p>
      </div>

      <div>
        <ul className="flex justify-center items-center gap-10 font-bold ">
          {header.navItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-[#64ffda] transition-colors cursor-pointer"
              onClick={() => onScroll(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

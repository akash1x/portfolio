import { usePortfolio } from "../hooks/usePortfolio";

const Header = () => {
  const { header, profileImg } = usePortfolio();

  return (
    <div className="flex justify-between mx-10">
      <div className="flex justify-center items-center gap-4">
        <img className="h-15 w-15" src={profileImg} alt="profile image" />
        <h1>{header.name}</h1>
      </div>

      <div>
        <ul className="flex justify-center items-center gap-4">
          {header.navItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

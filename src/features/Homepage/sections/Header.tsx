import { usePortfolio } from "../hooks/usePortfolio";

const Header = () => {
  const { header, profileImg } = usePortfolio();

  return (
    <div>
      <div>
        <img src={profileImg} alt="profile image" />
        <h1>{header.name}</h1>
      </div>

      <div>
        <ul>
          {header.navItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

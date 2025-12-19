import profileImage from "../assets/profile.svg";

const Header = () => {
  return (
    <div>
      <div>
        <img src={profileImage} alt="profile image" />
        <h1>Akash Dohare</h1>
      </div>

      <div>
        <ul>
          <li>Home</li>
          <li>Education</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

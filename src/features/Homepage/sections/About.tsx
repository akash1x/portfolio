import { usePortfolio } from "../hooks/usePortfolio";

const About = () => {
  const { about } = usePortfolio();

  return (
    <div>
      <div>
        <h1>Hi, I'm {about.name}</h1>
        <p>I'm a {about.title}</p>
        <p>{about.welcomeMessage}</p>
      </div>
      <div>
        <h3> {about.introductionTitle}</h3>
        <ul>
          {about.bioPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;

import { usePortfolio } from "../hooks/usePortfolio";
import CompanyCard from "../components/CompanyCard";

const Experience = () => {
  const { experience } = usePortfolio();

  return (
    <div>
      <h3>What I have done so far</h3>
      <h1>Work Experience</h1>
      {experience.map((exp, index) => (
        <CompanyCard key={index} experience={exp} />
      ))}
    </div>
  );
};

export default Experience;

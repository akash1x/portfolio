import { usePortfolio } from "../hooks/usePortfolio";
import CompanyCard from "../components/CompanyCard";
import DetailedCompanyCard from "../components/DetailedCompanyCard";

const Experience = () => {
  const { experience } = usePortfolio();

  return (
    <div>
      <div className=" flex flex-col justify-center items-center">
        <h3>What I have done so far</h3>
        <h1>Work Experience</h1>
      </div>
      <div className="flex justify-between">
        <div>
          {experience.map((exp, index) => (
            <CompanyCard key={index} experience={exp} />
          ))}
        </div>
        <div>
          <DetailedCompanyCard experience={experience[0]} />
        </div>
      </div>
    </div>
  );
};

export default Experience;

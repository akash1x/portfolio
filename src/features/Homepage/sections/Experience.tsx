import { forwardRef, useState } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import CompanyCard from "../components/CompanyCard";
import DetailedCompanyCard from "../components/DetailedCompanyCard";

interface ExperienceProps {
  ref: React.RefObject<HTMLDivElement>;
}
const Experience = ({ ref }: ExperienceProps) => {
  const { experience } = usePortfolio();
  const [currentExperience, setCurrentExperience] = useState(experience[0]);
  return (
    <div ref={ref} className="flex flex-col gap-20">
      <h1>/ experience</h1>
      <div className="flex justify-between">
        <div className="gap-4 flex flex-col">
          {experience.map((exp, index) => (
            <div
              key={index}
              onClick={() => setCurrentExperience(exp)}
              className={`cursor-pointer p-4 border-r-4 transition-all ${
                currentExperience === exp
                  ? "border-green-bright bg-green-bright/5"
                  : "border-transparent hover:bg-white/5"
              }`}
            >
              <CompanyCard experience={exp} />
            </div>
          ))}
        </div>
        <div className="flex-1 ml-20">
          <DetailedCompanyCard experience={currentExperience} />
        </div>
      </div>
    </div>
  );
};

export default Experience;

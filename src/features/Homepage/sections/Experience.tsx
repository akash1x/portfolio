import { useEffect, useState } from "react";
import { usePortfolio } from "../../../hooks/usePortfolio";
import CompanyCard from "../components/CompanyCard";
import DetailedCompanyCard from "../components/DetailedCompanyCard";
import Title from "../../../components/Title";

interface ExperienceProps {
  ref: React.RefObject<HTMLDivElement | null>;
}
const Experience = ({ ref }: ExperienceProps) => {
  const { experience } = usePortfolio();
  const [currentExperience, setCurrentExperience] = useState(experience[0]);
  if (!experience) {
    return <div ref={ref}>Loading...</div>;
  }
  useEffect(() => {
    setCurrentExperience(experience[0]);
  }, [experience]);
  return (
    <div ref={ref} className="min-h-screen flex flex-col py-20 gap-20">
      <Title title="/ experience" />
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
        <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 w-full md:w-auto">
          {experience.map((exp, index) => (
            <div
              key={index}
              onClick={() => setCurrentExperience(exp)}
              className={`cursor-pointer p-4 border-b-2 md:border-b-0 md:border-r-4 transition-all min-w-[200px] md:min-w-0 ${
                currentExperience === exp
                  ? "border-green-bright bg-green-bright/5"
                  : "border-transparent hover:bg-white/5"
              }`}
            >
              <CompanyCard experience={exp} />
            </div>
          ))}
        </div>
        <div className="flex-1 ml-0 md:ml-20 w-full">
          <DetailedCompanyCard experience={currentExperience} />
        </div>
      </div>
    </div>
  );
};

export default Experience;

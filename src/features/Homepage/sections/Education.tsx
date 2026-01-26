import { forwardRef } from "react";
import { usePortfolio } from "../../../hooks/usePortfolio";
import EducationCard from "../components/EducationCard";
import Title from "../../../components/Title";

interface EducationProps {
  ref: React.RefObject<HTMLDivElement | null>;
}
const Education = ({ ref }: EducationProps) => {
  const { education } = usePortfolio();

  return (
    <div
      ref={ref}
      className="flex min-h-screen w-full flex-col gap-12 py-20 relative overflow-hidden"
    >
      <div className="relative z-10 px-6 xl:px-0 w-full max-w-7xl mx-auto">
        <Title title="/ education" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 xl:px-0 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

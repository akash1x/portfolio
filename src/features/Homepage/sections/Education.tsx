import { forwardRef } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import EducationCard from "../components/EducationCard";

interface EducationProps {
  ref: React.RefObject<HTMLDivElement>;
}
const Education = ({ ref }: EducationProps) => {
  const { education } = usePortfolio();

  return (
    <div
      ref={ref}
      className=" bg-transparent flex flex-col  w-full max-w-7xl mx-auto py-12 relative overflow-hidden"
    >
      <div className="mb-20 relative z-10">
        <h1>/ education</h1>
      </div>

      {/* Vertical Line */}
      <div className="absolute top-32 bottom-0 w-1 bg-slate-gray left-1/2 transform -translate-x-1/2"></div>

      <div className="flex flex-col w-full relative">
        {education.map((edu, index) => (
          <div
            key={index}
            className={`flex items-center justify-between w-full mb-8 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Card Side */}
            <div className="w-[45%]">
              <EducationCard education={edu} />
            </div>

            {/* Center Node */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 bg-slate-gray z-10 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-slate-gray/20"></div>
            </div>

            {/* Date Side */}
            <div
              className={`w-[45%] flex ${
                index % 2 === 0 ? "justify-start pl-8" : "justify-end pr-8"
              }`}
            >
              <span className="text-xl font-bold">{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

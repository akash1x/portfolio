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
      className=" bg-transparent flex flex-col min-h-screen w-full max-w-7xl mx-auto py-20 relative overflow-hidden gap-20"
    >
      <div className="relative z-10">
        <Title title="/ education" />
      </div>
      <div>
        {/* Vertical Line */}
        <div className="absolute top-56 bottom-60 w-1 bg-slate-gray left-1/2 transform -translate-x-1/2 hidden md:block"></div>

        <div className="flex flex-col w-full relative">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`flex items-center justify-between w-full mb-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col gap-6 md:gap-0`}
            >
              {/* Card Side */}
              <div className="w-full md:w-[45%]">
                <EducationCard education={edu} />
              </div>

              {/* Center Node */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 bg-slate-gray z-10 items-center justify-center">
                <div className="w-full h-full rounded-full bg-slate-gray/20"></div>
              </div>

              {/* Date Side */}
              <div
                className={`w-full md:w-[45%] flex ${
                  index % 2 === 0
                    ? "md:justify-start md:pl-8"
                    : "md:justify-end md:pr-8"
                } justify-center`}
              >
                <span className="text-xl font-bold">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

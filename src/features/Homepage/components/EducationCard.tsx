import { Education } from "../types";

interface EducationCardProps {
  education: Education;
}

const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-green-bright/5 hover:-translate-y-1">
      <div className="flex flex-col gap-4 h-full justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-white group-hover:text-green-bright transition-colors duration-300">
            {education.degree}
          </h3>
          <p className="text-gray-400 text-lg font-medium">
            {education.collge}
          </p>
        </div>

        <div className="pt-4 border-t border-white/5">
          <span className="inline-block rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-400 tracking-wider">
            {education.period}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
